import axios from "axios";

export async function getTranscript(url) {
  try {
    const response = await axios.get(
      "https://transcriptapi.com/api/v2/youtube/transcript",
      {
        params: {
          video_url: url,
          format: "json",
        },
        headers: {
          Authorization: `Bearer ${process.env.TRANSCRIPT_API_KEY}`,
        },
      }
    );

    if (!response.data?.transcript) {
      throw new Error("No transcript returned");
    }

    const transcript = response.data.transcript
      .map((t) => t.text)
      .join(" ");

    return transcript;
  } catch (error) {
    console.error(
      "Transcript API Error:",
      error.response?.data || error.message
    );

    throw new Error("Unable to fetch transcript");
  }
}