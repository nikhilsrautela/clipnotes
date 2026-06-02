import { YoutubeTranscript } from "youtube-transcript";

function extractVideoId(url) {
  const match = url.match(
    /(?:youtube\.com.*v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/
  );
  return match ? match[1] : null;
}

export async function getTranscript(url) {
  const videoId = extractVideoId(url);

  if (!videoId) {
    throw new Error("Invalid YouTube URL");
  }

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);

    return transcript.map(t => t.text).join(" ");
  } catch (error) {
    console.error("Transcript Error:", error);

    throw new Error(
      "Unable to fetch transcript. The video may not have captions available or YouTube may be rate-limiting requests."
    );
  }
}