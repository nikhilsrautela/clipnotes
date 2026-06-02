import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoute from "./routes/generate.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://clipnotes-one.vercel.app",
  methods: ["GET", "POST"],
  credentials: true}));

app.get("/", (req, res) => {
  res.send("ClipNotes backend is running 🚀");
});

app.use(express.json());

app.use("/api/generate", generateRoute);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});