"use client";

import React, { useState, useEffect } from "react";
import ActivityCalendar from "react-activity-calendar";
import { startOfYear, endOfYear, eachDayOfInterval, format } from "date-fns";

// Predefined set of data for 2023
const predefinedData = eachDayOfInterval({
  start: startOfYear(new Date(2023, 0, 1)),
  end: endOfYear(new Date(2023, 0, 1)),
}).map((date, index) => {
  const count = index % 5; // Sample count for variety
  return {
    date: format(date, "yyyy-MM-dd"),
    count: count,
    level: Math.floor((count / 5) * 4), // Calculate level based on count
  };
});

const explicitTheme = {
  light: ["#ebf4ff", "#c3dafe", "#a3bffa", "#7f9cf5", "#5a67d8"],
};

function ActivityCalendarCard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Student Activity
      </h2>
      {isMounted && (
        <ActivityCalendar
          data={predefinedData}
          blockSize={12}
          blockMargin={2}
          theme={explicitTheme}
        />
      )}
    </div>
  );
}

export default ActivityCalendarCard;
