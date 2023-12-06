import React, { useState } from "react";
import { Checkbox } from "@/app/components/ui/checkbox";

const DeadlineSelection = ({ deadlines, onDeadlinesSelect }) => {
  const [selectedDeadlines, setSelectedDeadlines] = useState([]);

  const handleDeadlineChange = (deadline) => {
    setSelectedDeadlines((prevSelected) => {
      let newSelected;
      if (prevSelected.includes(deadline)) {
        newSelected = prevSelected.filter((d) => d !== deadline);
      } else {
        newSelected = [...prevSelected, deadline];
      }
      return newSelected;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 m-6">
      <h2 className="text-lg font-semibold mb-4">Select Deadlines</h2>
      <div className="space-y-3">
        {deadlines.map((deadline, index) => (
          <div key={index} className="flex items-center">
            <Checkbox
              checked={selectedDeadlines.includes(deadline)}
              onClick={() => handleDeadlineChange(deadline)}
            />
            <span className="ml-2">
              {deadline.title} -{" "}
              {new Date(deadline.dueDate).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={() => onDeadlinesSelect(selectedDeadlines)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default DeadlineSelection;
