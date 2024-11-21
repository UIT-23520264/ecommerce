'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios  from "axios";
import Link from "next/link";
import { trackDynamic } from "next/dist/server/route-modules/app-route/module";
import toast from "react-hot-toast";

export default function LoginPage() {
    const route = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const [buttonDisabled, setbuttonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const onLogin = async() =>{
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log("Login success" , response.data)
            toast.success("Login success")
            route.push("/profile")
        } catch (error:any) {
            console.log("Login failed", error.message)  
            toast.error(error.message)          
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0){
            setbuttonDisabled(false)
        }
        else{
            setbuttonDisabled(true)
        }
    },[user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-6 text-center text-blue-600">
                    Login
                </h1>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            id="email"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        onClick={onLogin}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm mt-4 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
