import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";

import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  // Transform the dueDate from string to a local Date object (so that timezones aren't necessary)
  const tasksWithDateObjects = tasks.map((task) => {
    const [year, month, day] = task.dueDate.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);

    return {
      ...task,
      dueDate: localDate,
    };
  });

  return z.array(taskSchema).parse(tasksWithDateObjects);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />

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
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}
