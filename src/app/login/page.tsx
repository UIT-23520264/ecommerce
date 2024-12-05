'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission reload
    if (loading) return; // Prevent duplicate submissions

    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful!");
      router.push("/");
    } catch (error: any) {
      console.error("Login failed", error.message);
      toast.error(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Đăng nhập
        </h1>
        <form onSubmit={onLogin}>
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
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={buttonDisabled || loading}
            className={`w-full py-2 px-4 rounded-lg text-white ${buttonDisabled || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
}
