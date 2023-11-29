import React from "react";

function WelcomeHeader({ username }) {
  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-white">
          {getCurrentTimeOfDay()}, {username}!
        </h1>
        <p className="text-indigo-200">
          Here's your latest application progress.
        </p>
      </div>
      <div>
        <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-2 px-4 rounded">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default WelcomeHeader;
