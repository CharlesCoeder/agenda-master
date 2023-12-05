import { connectMongoDB } from "@/lib/mongodb";
import College from "@/models/college";

export async function GET() {
  try {
    await connectMongoDB();

    const colleges = await College.find({});

    return new Response(JSON.stringify(colleges), {
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
