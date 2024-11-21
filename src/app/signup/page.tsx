"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        userName: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/register", user);
            console.log("Successfully", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log("Failed");
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.userName.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4">
                {loading ? "Processing..." : "Sign up"}
            </h1>
            <hr className="w-full max-w-md border-gray-300 mb-4" />
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                />

                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-700">
                    Username
                </label>
                <input
                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                    id="username"
                    type="text"
                    value={user.userName}
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    placeholder="Username"
                />

                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                />

                <button
                    onClick={onSignup}
                    className={`w-full p-2 rounded-lg text-white ${buttonDisabled
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    disabled={buttonDisabled}
                >
                    {buttonDisabled ? "No Sign Up" : "Sign up"}
                </button>
            </form>
            <p className="text-sm mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                    Login Page
                </Link>
            </p>
        </div>
    );
}
