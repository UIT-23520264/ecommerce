import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";
import { prisma } from "./prisma";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = (await cookies()).get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }

  const cartInOrder = await prisma.order.findUnique({
        where: { 
          cartId: cart.id,
          status: 'paid'
         },
      })

  
  if(!cartInOrder)
    return {
      ...cart,
      size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: cart.items.reduce(
        (acc, item) => {
          if(item.product.discountPrice)
            return acc + item.quantity * item.product.discountPrice
          return acc + item.quantity * item.product.price
        },
        0
      ),
    };
  else
    return null
}

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  // Note: Needs encryption + secure settings in real production app
  (await cookies()).set("localCartId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function deleteCart() {

  const cart = await getCart()

  if(cart == null)
    return

  const newCart = await prisma.cart.deleteMany({
    where: {id: cart.id},
  });
  
  (await cookies()).delete("localCartId")
}



