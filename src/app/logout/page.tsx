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
    const onLogout = () => {
        try {
            axios.get('api/users/logout')
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
        setData(res.data.data._id)

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button
                onClick={onLogout}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
                Logout</button>
            <hr />

            <button
                onClick={getUserDetail}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
                getUserDetail</button>

        </div>
    )
}