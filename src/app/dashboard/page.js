// Dashboard.js

import Sidebar from "../components/Sidebar";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import ApplicationStatusCard from "../components/dashboard/ApplicationStatusCard";
import DeadlineCard from "../components/dashboard/DeadlineCard";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-indigo-500">
      <Sidebar />
      <div className="flex-1 p-4">
        <WelcomeHeader username="testUser" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ApplicationStatusCard status="Not started" />
          <DeadlineCard />
        </div>
      </div>
    </div>
  );
}
