"use client";

import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import fetchTasks from "@/utils/fetchTasks";
import { useSession } from "next-auth/react";

export default function Timeline() {
  const [tasks, setTasks] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchAndSetTasks = async () => {
      if (status === "authenticated" && session?.user?.id) {
        try {
          const fetchedTasks = await fetchTasks(session.user.id);
          if (fetchedTasks) {
            setTasks(fetchedTasks);
          }
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      }
    };

    fetchAndSetTasks();
  }, [status, session]);

  if (status !== "authenticated") {
    return <div>Loading...</div>;
  }

  const formattedTasks =
    tasks && tasks.length > 0
      ? [...tasks]
          .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
          .map((task) => ({
            title: new Date(task.dueDate).toLocaleDateString(),
            cardTitle: task.title,
            cardSubtitle: `Priority: ${task.priority}, Status: ${task.status}, Label: ${task.label}`,
            cardDetailedText: task.description,
          }))
      : [];

  return (
    <div className="w-full h-[80vh] pb-10">
      <Chrono
        items={formattedTasks}
        allowDynamicUpdate={true}
        mode="VERTICAL"
        theme={{
          primary: "rgb(33, 150, 243)",
          secondary: "rgb(255, 255, 255)",
          cardBgColor: "rgb(255, 255, 255)",
          cardForeColor: "rgb(33, 33, 33)",
        }}
      />
    </div>
  );
}
