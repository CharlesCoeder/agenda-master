import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description, dueDate, status, label, priority } =
      await req.json();

    await connectMongoDB();
    await Task.create({ title, description, dueDate, status, label, priority });

    return NextResponse.json({ message: "Task created." }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Error occured while creating the task." },
      { status: 500 }
    );
  }
}
