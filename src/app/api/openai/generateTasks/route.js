import { createPrompt } from "@/utils/promptUtils";
import openai from "openai";

export async function POST(req) {
  try {
    const { college, selectedDeadlines, taskAllocations } = await req.json();
    const prompt = createPrompt(college, selectedDeadlines, taskAllocations);

    const client = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant designed to help students create a timeline of tasks for college applications. Please output the tasks in JSON format.",
        },
        { role: "user", content: prompt },
      ],
    });

    return new Response(JSON.stringify(response.choices[0].message.content), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
