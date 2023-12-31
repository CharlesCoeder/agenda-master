import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description, dueDate, status, label, priority, userId } =
      await req.json();

    await connectMongoDB();
    const newTask = await Task.create({
      title,
      description,
      dueDate,
      status: status,
      label: label,
      priority: priority,
      userId: userId,
    });

    return NextResponse.json({ newTask }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Error occured while creating the task." },
      { status: 500 }
    );
  }
}
