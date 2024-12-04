import { searchProducts } from "@/lib/actions";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-semibold">Choose the natural products to protect the Earth.</h1>
          <form action={searchProducts}>
            <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
              <AiOutlineSearch size={"1.2rem"} />
              <input className="outline-0 w-full" name="query" type="text" placeholder="Search..." />
            </div>
          </form>
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
