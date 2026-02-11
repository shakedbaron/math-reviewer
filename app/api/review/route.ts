
import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const form = await req.formData();
  const ex = form.get("exercise") as File;
  const sol = form.get("solution") as File;

  const exB64 = Buffer.from(await ex.arrayBuffer()).toString("base64");
  const solB64 = Buffer.from(await sol.arrayBuffer()).toString("base64");

  const response = await client.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: "Critique the math solution and provide formal solution." },
          { type: "input_image", image_url: `data:${ex.type};base64,${exB64}` },
          { type: "input_image", image_url: `data:${sol.type};base64,${solB64}` }
        ]
      }
    ]
  });

  return NextResponse.json({
    output: response.output_text
  });
}
