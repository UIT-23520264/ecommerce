import { searchProducts } from "@/lib/actions";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-semibold">Lựa chọn sản phẩm từ thiên nhiên để bảo về Trái Đất.</h1>
        </div>
        <div className="hidden md:flex p-5">
          <Image
            src="/straws.jpg"
            alt="Straws"
            width={400}
            height={300}
            className="border-8 border-gray-500"
          />
        </div>
      </div>
    </div>
  )
}
