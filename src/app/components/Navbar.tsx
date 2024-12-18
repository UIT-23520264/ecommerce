
import { searchProducts } from "@/lib/actions"
import { getCart } from "@/lib/db/cart"
import Link from "next/link"
import Image from "next/image"


export default async function Navbar() {
    const cart = await getCart()
    const onLogout = async () => {

    }
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <div className="hidden md:flex p-1">
                        <Image
                            src="/demo_logo.jpg" // Ensure the image is located in the public directory
                            alt="Demo Logo" // Add a descriptive alt text
                            width={74} // Matches the width in pixels (w-[74px])
                            height={90} // Matches the height in pixels (h-[90px])
                            className="w-[74px] h-[90px]" // Optional Tailwind classes
                        />
                    </div>
                    <div className="md:mx-6">
                        <Link className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="/">Home</Link>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className="md:flex items-center">
                    <div className="flex flex-col md:flex-row md:mx-3">
                        <Link className="relative text-gray-700 hover:text-gray-600" href="/signup">
                            <div className="flex justify-center items-center">
                                <div className="relative">
                                    <svg className="h-7 w-7 m-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="2" fill="none" />
                                        <path d="M4 20c0-4.4183 3.5817-8 8-8s8 3.5817 8 8" stroke="black" strokeWidth="2" fill="none" />
                                        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
                                    </svg>

                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="w-full">
                        <form action={searchProducts}>
                            <input
                                type="text"
                                name="query"
                                className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                                placeholder="Search..."
                            />
                        </form>
                    </div> */}

                    <div className="flex items-center justify-center flex-col md:flex-row md:mx-6">
                        <Link
                            className="text-gray-800 text-xl font-bold md:text-1xl hover:text-gray-700"
                            href="/about"
                        >
                            About Us
                        </Link>

                        {/* <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/contact">Contact</Link>
                        <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/about">About</Link> */}
                    </div>


                    <Link className="relative text-gray-700 hover:text-gray-600" href="/cart">
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <div className="t-1 absolute left-4 top-0">
                                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cart?.size || 0}</p>
                                </div>
                                <svg className="h-5 w-5 m-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    {/* <form action="/api/users/logout" method="POST">
                        <button
                            type="submit"
                            className="flex flex-col md:flex-row md:mx-6 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        >
                            Logout</button>
                    </form> */}
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link
                            className="text-gray-800 text-xl font-bold md:text-1xl hover:text-gray-700"
                            href="/profile">Thông tin tài khoản</Link>
                        {/* <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/contact">Contact</Link>
                        <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/about">About</Link> */}
                    </div>
                </div>
            </div>


        </nav>
    )
}
