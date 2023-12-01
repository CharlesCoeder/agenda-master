"use client";

import React, { useState, useContext } from "react";
import { Input } from "@/app/components/ui/input"; // Adjusted for ShadCN
import { Button } from "@/app/components/ui/button"; // Adjusted for ShadCN
import { ActiveUserContext } from "../components/ActiveUserContext"; // Assuming similar context usage
import { useRouter } from "next/navigation"; // Assuming similar router usage

function LoginPage() {
  const router = useRouter();
  const { setActiveUser } = useContext(ActiveUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();

      setActiveUser(user);
      router.push("/dashboard");
    }
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
      </div>
    </div>
  );
}

export default LoginPage;
