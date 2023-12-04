import SidebarLayout from "../components/SidebarLayout";
import CreateTaskModal from "../components/tasks/CreateTaskModal";

export default function Page() {
  return (
    <SidebarLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <CreateTaskModal />
      </div>
    </SidebarLayout>
  );
}
