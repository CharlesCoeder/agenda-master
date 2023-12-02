"use client";

import Sidebar from "./components/Sidebar";
import WelcomeHeader from "./components/dashboard/WelcomeHeader";
import ApplicationStatusCard from "./components/dashboard/ApplicationStatusCard";
import DeadlineCard from "./components/dashboard/DeadlineCard";
import ActivityCalendarCard from "./components/dashboard/Calendar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-indigo-500">
      <Sidebar />
      <div className="flex-1 p-4">
        <WelcomeHeader username="test" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ApplicationStatusCard
            status="Not started"
            className="md:col-span-1"
          />
          <DeadlineCard deadlines={[]} className="md:col-span-1" />
          <div className="md:col-span-2">
            <ActivityCalendarCard />
          </div>
        </div>
      </div>
    </div>
  );
}
