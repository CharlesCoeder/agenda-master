"use state";

import React, { useState } from "react";

const TaskAllocation = ({ selectedDeadlines, onTaskAllocationSubmit }) => {
  const [taskAllocations, setTaskAllocations] = useState(
    selectedDeadlines.reduce((acc, deadline) => {
      acc[deadline.title] = 1; // Default to 1 task per deadline
      return acc;
    }, {})
  );

  const handleTaskNumberChange = (deadlineTitle, number) => {
    setTaskAllocations({
      ...taskAllocations,
      [deadlineTitle]: number,
    });
  };

  const handleSubmit = () => {
    onTaskAllocationSubmit(taskAllocations);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 m-6">
      <h2 className="text-lg font-semibold mb-4">
        Task Allocation
      </h2>
      {selectedDeadlines.map((deadline, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <span className="mr-2">{deadline.title}:</span>
          <input
            type="number"
            min="1"
            value={taskAllocations[deadline.title]}
            onChange={(e) =>
              handleTaskNumberChange(
                deadline.title,
                parseInt(e.target.value, 10)
              )
            }
            className="border rounded px-2 py-1"
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Task Allocations
      </button>
    </div>
  );
};

export default TaskAllocation;
