"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import SidebarLayout from "../components/SidebarLayout";
import { useSession } from "next-auth/react";

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const { data: session, status } = useSession();

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    async function fetchUserTasks(userId) {
      try {
        const response = await fetch(`/api/tasks/${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedTasks = await response.json();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    if (status === "authenticated") {
      fetchUserTasks(session.user.id);
    }
  }, [status, session]);

  return (
    <SidebarLayout backgroundColor="">
      <div className="flex-grow flex flex-col overflow-hidden">
        <div className="md:hidden">
          <Image
            src="/examples/tasks-light.png"
            width={1280}
            height={998}
            alt="Playground"
            className="block dark:hidden"
          />
          <Image
            src="/examples/tasks-dark.png"
            width={1280}
            height={998}
            alt="Playground"
            className="hidden dark:block"
          />
        </div>

        <div className="flex-grow p-8 overflow-auto">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome back!
              </h2>
              <p className="text-muted-foreground text-gray">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <UserNav />
            </div>
          </div>
          <div className="overflow-x-auto">
            <DataTable
              data={tasks}
              columns={columns}
              onNewTask={handleNewTask}
            />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
