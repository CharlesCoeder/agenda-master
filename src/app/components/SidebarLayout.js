import Sidebar from "./ui/Sidebar";

const SidebarLayout = ({ children, backgroundColor = 'bg-indigo-500'}) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className={`flex-grow ${backgroundColor}`}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
