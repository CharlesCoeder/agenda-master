"use client";

import Sidebar from "../components/Sidebar";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import ApplicationStatusCard from "../components/dashboard/ApplicationStatusCard";
import DeadlineCard from "../components/dashboard/DeadlineCard";
import { ActiveUserContext, ActiveUserProvider } from "../components/ActiveUserContext";
import { useContext } from "react";

export default function Dashboard() {
  const { activeUser } = useContext(ActiveUserContext);
  const name = activeUser.Name;

  console.log(name);

  return (
    <ActiveUserProvider>
        <div className="flex h-screen bg-indigo-500">
            <Sidebar />
            <div className="flex-1 p-4">
                <WelcomeHeader username={name} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ApplicationStatusCard status="Not started" />
                    <DeadlineCard />
                </div>
            </div>
        </div>
    </ActiveUserProvider>
  );
}
