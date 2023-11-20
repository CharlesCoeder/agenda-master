import Sidebar from "./components/Sidebar";
import SimpleRegistrationForm from "./registrationForm";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <SimpleRegistrationForm />
    </div>
  );
}
