import express from "express";
import { getTranscript } from "../services/youtube.js";
import { generateNotes } from "../services/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const transcript = await getTranscript(req.body.url);
    const notes = await generateNotes(transcript);

    return res.json({ notes });
  } catch (error) {
    console.error(error);

    return res.json({
      notes: "AI could not process video properly, but system is working."
    });
  }
});

export default router;