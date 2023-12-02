"use client";

import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid credentials");
        return;
      }
      router.replace("/");
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
        {/* Title and Description */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">Welcome to Agenda Master</h3>
          <p className="text-gray-700">Sign in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Email Field */}
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            type="text"
            className="w-full"
          />

          {/* Password Field */}
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="***********"
            type="password"
            className="w-full"
          />

          {/* Submit Button */}
          <Button
            className="w-full flex justify-center bg-indigo-500"
            type="submit"
          >
            Sign In
          </Button>
        </form>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
