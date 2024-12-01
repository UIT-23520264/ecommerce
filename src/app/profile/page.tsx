"use client"
import { NextResponse } from "next/server"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function LogoutPage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const onLogout = async () => {
        try {
            await axios.get('api/users/logout')
            toast.success('Login Successfully')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)

        }
    }

    const getUserDetail = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data.username)

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile</h1>
                <hr className="border-gray-300 my-4" />
                <p className="text-gray-600 text-center mb-6">Welcome to your profile page!</p>

                <h2 className="text-lg font-medium text-center text-gray-700 mb-6">
                    {data === "nothing" ? (
                        "No profile data available"
                    ) : (
                        <Link
                            href={`/profile/${data}`}
                            className="text-blue-500 hover:text-blue-600"
                        >
                            {data}
                        </Link>
                    )}
                </h2>

                <div className="space-y-4">
                    <button
                        onClick={onLogout}
                        className="w-full py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    >
                        Logout
                    </button>

                    <button
                        onClick={getUserDetail}
                        className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        View User Information
                    </button>
                </div>
            </div>
        </div>

    )
}