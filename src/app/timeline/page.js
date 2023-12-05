import SidebarLayout from "../components/SidebarLayout";
import Timeline from "./components/Timeline";

export default function Page() {
  return (
    <SidebarLayout>
      <div className="w-full flex flex-col items-center bg-indigo-500 p-4">
        <h1 className="text-5xl mb-4 text-white">Timeline</h1>
        <div className="w-full max-w-7xl h-[80vh] bg-white p-4 rounded-lg shadow-md mx-auto overflow-hidden">
          <Timeline />
        </div>
      </div>
    </SidebarLayout>
  );
}
