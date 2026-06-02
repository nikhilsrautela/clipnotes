import { YoutubeTranscript } from "youtube-transcript";

function extractVideoId(url) {
  const match = url.match(/(?:youtube\.com.*v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/);
  return match ? match[1] : null;
}

export async function getTranscript(url) {
  const videoId = extractVideoId(url);

  if (!videoId) {
    throw new Error("Invalid YouTube URL");
  }

  try {
  const transcript = await getTranscript(url);
} catch (error) {
  return res.status(400).json({
    error: "Transcript unavailable for this video. Try another video."
  });
}

  const transcript = await YoutubeTranscript.fetchTranscript(videoId);

  return transcript.map(t => t.text).join(" ");
}