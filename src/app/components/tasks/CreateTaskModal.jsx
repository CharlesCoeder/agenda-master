"use client";

import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { DatePicker } from "./datePicker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/app/components/ui/select";
import { labels, statuses, priorities } from "@/app/tasks/data/data.jsx";

export default function CreateTaskModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [status, setStatus] = useState("");
  const [label, setLabel] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !dueDate || !status || !label || !priority) {
      setError("All fields are necessary.");
      return;
    } else {
      setError("");
    }

    try {
      const res = await fetch("/api/tasks/createTask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          dueDate,
          status,
          label,
          priority,
        }),
      });

      if (res.ok) {
        const form = e.target;
        setTitle("");
        setDescription("");
        setDueDate(null);
        setStatus("");
        setLabel("");
        setPriority("");
        form.reset();
        console.log("Task created.");
      } else {
        console.log("Task creation failed.");
      }
    } catch (error) {
      console.log("Error in creating task: ", error);
      setError("Error in creating task.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h2 className="text-lg font-semibold mb-4">Create a New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task Description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Due Date
            </label>
            <DatePicker date={dueDate} onDateChange={setDueDate} />
          </div>

          {/* Status Field */}
          <div>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <Select onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </SelectGroup>
          </div>

          {/* Label Field */}
          <div>
            <SelectGroup>
              <SelectLabel>Label</SelectLabel>
              <Select onValueChange={setLabel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Label" />
                </SelectTrigger>
                <SelectContent>
                  {labels.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </SelectGroup>
          </div>

          {/* Priority Field */}
          <div>
            <SelectGroup>
              <SelectLabel>Priority</SelectLabel>
              <Select onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </SelectGroup>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Task
          </Button>
        </form>
        {error && (
          <div
            className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
