import "../config/env.js";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateNotes(transcript) {
  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: "Convert transcript into clean structured study notes",
      },
      {
        role: "user",
        content: transcript,
      },
    ],
  });

  return response.choices[0].message.content;
}