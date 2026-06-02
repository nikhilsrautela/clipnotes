import express from "express";
import { getTranscript } from "../services/youtube.js";
import { generateNotes } from "../services/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const transcript = await getTranscript(req.body.url);
    const notes = await generateNotes(transcript);

    res.json({ notes });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;