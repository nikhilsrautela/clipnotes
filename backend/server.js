import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoute from "./routes/generate.js";

dotenv.config();

const app = express();

app.use(express.json());

// CORS (frontend allowed)
app.use(
  cors({
    origin: "https://clipnotes-one.vercel.app",
    methods: ["GET", "POST"],
    credentials: false,
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ClipNotes backend is running 🚀",
  });
});

app.use("/api/generate", generateRoute);

app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});