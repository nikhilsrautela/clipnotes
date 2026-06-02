import express from "express";
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

    const notes = await generateNotes(url);

    return res.json({
      notes,
      source: "ai-only"
    });

  } catch (error) {
    console.error("Generate Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate notes",
    });
  }
});

export default router;