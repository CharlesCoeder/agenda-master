"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const CollegeSelection = ({ colleges, onCollegeSelect }) => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeSelect = (college) => {
    setSelectedCollege(college);
    onCollegeSelect(college); // Callback function to pass the selected college to the parent component
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
      {colleges.map((college) => (
        <Card key={college._id} className="p-4">
          <CardHeader>
            <CardTitle>{college.name}</CardTitle>
            <CardDescription>
              {college.location.city}, {college.location.state},{" "}
              {college.location.country}
            </CardDescription>
          </CardHeader>
          <CardContent>{college.description}</CardContent>
          <CardFooter>
            <Button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleCollegeSelect(college)}
            >
              Select
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CollegeSelection;
