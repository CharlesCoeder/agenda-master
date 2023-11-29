import Sidebar from "./components/Sidebar";
import SimpleRegistrationForm from "./main/registrationForm";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <SimpleRegistrationForm />
    </div>
  );
}
