"use client";

import React, { useState } from "react";
import { Input } from "@/app/components/ui/input"; // ShadCN input component
import { Button } from "@/app/components/ui/button"; // ShadCN button component
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password || !email) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("Email is already associated with an account.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("User registration failed. Error: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-sm w-full">
        <h4 className="text-lg font-semibold color-blue-gray mb-1">
          Welcome to Agenda Master
        </h4>
        <p className="text-gray-700 font-normal">Sign up to get started.</p>
        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {/* Name Field */}
            <label className="color-blue-gray font-medium -mb-3">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full border-t-blue-gray-200 focus:border-t-gray-900"
            />

            {/* Email Field */}
            <label className="color-blue-gray font-medium -mb-3">Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@mail.com"
              className="w-full border-t-blue-gray-200 focus:border-t-gray-900"
            />

            {/* Password Field */}
            <label className="color-blue-gray font-medium -mb-3">
              Password
            </label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="***********"
              className="w-full border-t-blue-gray-200 focus:border-t-gray-900"
            />
          </div>

          {/* Sign Up Button */}
          <Button type="submit" className="mt-6 bg-indigo-500 w-full">
            Sign Up
          </Button>

          {/* Sign In Link */}
          <p className="color-gray mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </p>
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
