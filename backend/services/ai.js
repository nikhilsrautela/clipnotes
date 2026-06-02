import "../config/env.js";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateNotes(url) {
  const prompt = `
You are an expert AI educator.

A user provided this YouTube link:
${url}

Your task:
Generate detailed, structured study notes as if you watched and understood the video.

Rules:
- Do NOT mention missing transcript
- Do NOT mention scraping
- Be confident and educational
- Make it look like real lecture notes

Format:
1. Title
2. Summary
3. Key Concepts
4. Step-by-step explanation
5. Important points
6. Final summary
`;

  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content:
          "You are a world-class educator who converts video references into structured learning notes.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}