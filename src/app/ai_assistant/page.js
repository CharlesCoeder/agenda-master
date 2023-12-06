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
  const [isLoading, setIsLoading] = useState(true);
  const [isGeneratingTasks, setIsGeneratingTasks] = useState(false);
  const [currentStep, setCurrentStep] = useState("collegeSelection");
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const getColleges = async () => {
      const fetchedColleges = await fetchColleges();
      if (fetchedColleges) {
        setColleges(fetchedColleges);
        setCurrentStep("collegeSelection");
      }
      setIsLoading(false);
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
    setIsGeneratingTasks(true);
    await generateTasks(
      selectedCollege,
      selectedDeadlines,
      allocations,
      setIsLoading,
      setApiResponse
    );
    setIsGeneratingTasks(false);
    setCurrentStep("taskSummary");
  };

  const handleRetry = async () => {
    setIsGeneratingTasks(true);
    await generateTasks(
      selectedCollege,
      selectedDeadlines,
      taskAllocations,
      setIsLoading,
      setApiResponse
    );
    setIsGeneratingTasks(false);
    setCurrentStep("taskSummary");
  };

  const handleSuccess = () => {
    setSelectedCollege(null);
    setSelectedDeadlines([]);
    setTaskAllocations({});
    setCurrentStep("collegeSelection");
  };

  const getGuidanceText = () => {
    switch (currentStep) {
      case "collegeSelection":
        return "Choose a college to get AI-powered tasks for your application process.";
      case "deadlineSelection":
        return "Select which deadlines you want to include in your task timeline.";
      case "taskAllocation":
        return "Specify how many tasks you would like to allocate for each deadline.";
      case "taskSummary":
        return "Here are your AI generated tasks! You can confirm or retry to generate again.";
      default:
        return "";
    }
  };

  return (
    <SidebarLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {isLoading && !isGeneratingTasks && <LoadingSpinner />}
        {isGeneratingTasks && (
          <>
            <p className="text-2xl text-white font-medium mt-4">
              Generating tasks...
            </p>
            <LoadingSpinner />
          </>
        )}

        {!isLoading && !isGeneratingTasks && (
          <>
            <div className="text-center p-4">
              <p className="text-2xl text-white font-medium">
                {getGuidanceText()}
              </p>
            </div>

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

            {currentStep === "taskSummary" && apiResponse && (
              <TaskSummary
                tasks={apiResponse}
                handleRetry={handleRetry}
                handleSuccess={handleSuccess}
              />
            )}
          </>
        )}
      </div>
    </SidebarLayout>
  );
}
