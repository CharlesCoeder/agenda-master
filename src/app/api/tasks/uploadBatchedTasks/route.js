import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const tasks = await req.json();

    await connectMongoDB();

    const newTasks = await Task.insertMany(tasks);

    return NextResponse.json({ newTasks }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error occurred while creating tasks." },
      { status: 500 }
    );
  }
}
