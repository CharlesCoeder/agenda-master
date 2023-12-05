import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { userId } = params;

    // validate userId
    if (!userId) {
      return new Response(JSON.stringify({ message: "userId is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const tasks = await Task.find({ userId });
    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
