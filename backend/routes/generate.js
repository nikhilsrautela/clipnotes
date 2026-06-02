import express from "express";
import { getTranscript } from "../services/youtube.js";
import { generateNotes } from "../services/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const transcript = await getTranscript(req.body.url);
    const notes = await generateNotes(transcript);

    res.json({ notes });

  } catch (error) {
    console.error("Generate route error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,});
  }
});

export default router;