import React from "react";

function DeadlineCard({ deadlines = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">
        Upcoming Deadlines
      </h2>
      {deadlines.length > 0 ? (
        <ul>
          {deadlines.map((deadline, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {deadline.task}:{" "}
              <span className="font-bold text-red-500">{deadline.date}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No upcoming deadlines.</p>
      )}
    </div>
  );
}

export default DeadlineCard;
