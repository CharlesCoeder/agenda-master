import React from "react";

function ApplicationStatusCard({ status }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">
        Application Status
      </h2>
      <p className="text-gray-700">Your current application status is:</p>
      <span
        className={`font-bold ${
          status === "Completed" ? "text-green-500" : "text-orange-500"
        }`}
      >
        {status || "Not Started"}
      </span>
    </div>
  );
}

export default ApplicationStatusCard;
