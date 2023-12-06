"use client";

import React, { useState, useEffect } from "react";
import SidebarLayout from "../components/SidebarLayout";
import CollegeSelection from "./components/CollegeSelection";
import DeadlineSelection from "./components/DeadlineSelection";
import TaskAllocation from "./components/TaskAllocation";
import fetchColleges from "@/utils/fetchColleges";
import LoadingSpinner from "./components/LoadingSpinner";
import TaskSummary from "./components/TaskSummary";
import generateTasks from "@/utils/generateTasks";

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
    await generateTasks(
      selectedCollege,
      selectedDeadlines,
      allocations,
      setIsLoading,
      setApiResponse
    );
    setCurrentStep("taskSummary");
  };

  const handleRetry = async () => {
    await generateTasks(
      selectedCollege,
      selectedDeadlines,
      taskAllocations,
      setIsLoading,
      setApiResponse
    );
    setCurrentStep("taskSummary");
  };

  return (
    <SidebarLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {isLoading && <LoadingSpinner />}

        {!isLoading && currentStep === "collegeSelection" && (
          <CollegeSelection
            colleges={colleges}
            onCollegeSelect={handleCollegeSelect}
          />
        )}

        {!isLoading &&
          currentStep === "deadlineSelection" &&
          selectedCollege && (
            <DeadlineSelection
              deadlines={selectedCollege.deadlines}
              onDeadlinesSelect={handleDeadlinesSelect}
            />
          )}

        {!isLoading && currentStep === "taskAllocation" && (
          <TaskAllocation
            selectedDeadlines={selectedDeadlines}
            onTaskAllocationSubmit={handleTaskAllocationsSubmit}
          />
        )}

        {!isLoading && currentStep === "taskSummary" && apiResponse && (
          <TaskSummary tasks={apiResponse} onRetry={handleRetry} />
        )}
      </div>
    </SidebarLayout>
  );
}
