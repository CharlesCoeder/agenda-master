"use client";

import { ActiveUserProvider } from "../components/ActiveUserContext";
import LoginPage from "./loginPage";

export default function Dashboard() {
  return (
    <ActiveUserProvider>
      <div className="flex justify-center items-center h-screen bg-indigo-500">
        <LoginPage />
      </div>
    </ActiveUserProvider>
  );
}
