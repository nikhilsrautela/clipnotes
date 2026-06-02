import axios from "axios";

export async function getTranscript(url) {
  try {
    const response = await axios.get(
      "https://transcriptapi.com/api/v1/transcript",
      {
        params: {
          url,
        },
        headers: {
          Authorization: `Bearer ${process.env.TRANSCRIPT_API_KEY}`,
        },
      }
    );

    return response.data.transcript;
  } catch (error) {
    console.error("Transcript API Error:", error.response?.data || error);

    throw new Error("Unable to fetch transcript");
  }
}