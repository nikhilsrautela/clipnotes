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
        content: `
You are an expert educator.

Convert the provided video transcript into clean, structured study notes.

Format:

# Title

## Summary

## Key Concepts

## Detailed Explanation

## Important Takeaways

## Final Summary

Use markdown formatting.
Avoid filler text.
Keep explanations concise but informative.
`,
      },
      {
        role: "user",
        content: transcript,
      },
    ],
    temperature: 0.3,
  });

  return response.choices[0].message.content;
}