import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const TaskSummary = ({ tasks, onRetry, onConfirm }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Generated Tasks
      </h2>

      <div className="overflow-auto mb-6" style={{ maxHeight: "70vh" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{task.description}</CardDescription>
                <p className="mt-2">
                  Due Date: {new Date(task.dueDate).toLocaleDateString()}
                </p>
                <p>Status: {task.status}</p>
                <p>Label: {task.label}</p>
                <p>Priority: {task.priority}</p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          className="mt-4 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={onRetry}
        >
          Retry
        </Button>
        <Button
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default TaskSummary;
