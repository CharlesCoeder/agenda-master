"use client";

import React, { useState, useEffect } from "react";
import SidebarLayout from "../components/SidebarLayout";
import CollegeSelection from "./components/CollegeSelection";
import DeadlineSelection from "./components/DeadlineSelection";
import TaskAllocation from "./components/TaskAllocation";
import fetchColleges from "@/utils/fetchColleges";

export default function Page() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedDeadlines, setSelectedDeadlines] = useState([]);
  const [taskAllocations, setTaskAllocations] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState("collegeSelection");
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const getColleges = async () => {
      const fetchedColleges = await fetchColleges();
      if (fetchedColleges) {
        setColleges(fetchedColleges);
      }
    };
    getColleges();
  }, []);

  const handleCollegeSelect = (college) => {
    setSelectedCollege(college);
    setCurrentStep("deadlineSelection");
  };

  const handleDeadlinesSelect = (deadlines) => {
    setSelectedDeadlines(deadlines);
    setCurrentStep("taskAllocation");
  };

  const handleTaskAllocationsSubmit = async (allocations) => {
    // rate limiting purposes
    if (isLoading) {
      console.log("Please wait, AI Assistant is busy generating tasks.");
      return;
    }

    setIsLoading(true);

    // set 10 second delay before user can try fetch the API again
    // (this is a safeguard and shouldn't matter in practice)
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    setTaskAllocations(allocations);

    try {
      const response = await fetch("/api/openai/generateTasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          college: selectedCollege,
          selectedDeadlines: selectedDeadlines,
          taskAllocations: allocations,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }

    setCurrentStep("summary");
  };

  const renderSummary = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6 m-6">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <p>Selected College: {selectedCollege.name}</p>
        {selectedDeadlines.map((deadline, index) => (
          <div key={index}>
            <p>
              {deadline.title}: {taskAllocations[deadline.title]} tasks
            </p>
          </div>
        ))}
        <h3 className="text-lg font-semibold mt-4">API Response:</h3>
        <pre>{JSON.stringify(apiResponse, null, 2)}</pre>{" "}
      </div>
    );
  };

  return (
    <SidebarLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {currentStep === "collegeSelection" && (
          <CollegeSelection
            colleges={colleges}
            onCollegeSelect={handleCollegeSelect}
          />
        )}
        {currentStep === "deadlineSelection" && selectedCollege && (
          <DeadlineSelection
            deadlines={selectedCollege.deadlines}
            onDeadlinesSelect={handleDeadlinesSelect}
          />
        )}
        {currentStep === "taskAllocation" && (
          <TaskAllocation
            selectedDeadlines={selectedDeadlines}
            onTaskAllocationSubmit={handleTaskAllocationsSubmit}
          />
        )}
        {currentStep === "summary" && renderSummary()}
      </div>
    </SidebarLayout>
  );
}
