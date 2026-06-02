import express from "express";
import { getTranscript } from "../services/youtube.js";
import { generateNotes } from "../services/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    const transcript = await getTranscript(url);

    const notes = await generateNotes(transcript);

    return res.json({
      success: true,
      notes,
    });

  } catch (error) {
    console.error("Generate Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to generate notes",
    });
  }
});

export default router;