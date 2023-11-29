import Sidebar from "../components/Sidebar";
import LoginPage from "./loginPage";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <LoginPage />
    </div>
  );
}
