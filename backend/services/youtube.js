import ytdlp from "yt-dlp-exec";
import axios from "axios";

export async function getTranscript(url) {
  try {
    const output = await ytdlp(url, {
      dumpSingleJson: true,
      skipDownload: true,
      writeAutoSub: true,
      subLang: "en",
    });

    const captions =
      output.subtitles?.en ||
      output.automatic_captions?.en;

    if (!captions || captions.length === 0) {
      throw new Error("No captions available for this video");
    }

    // Get first caption track URL
    const captionUrl = captions[0].url;

    if (!captionUrl) {
      throw new Error("Caption URL not found");
    }

    const response = await axios.get(captionUrl);
    const vttData = response.data;

    // Convert VTT → plain text
    const transcript = vttData
      .replace(/WEBVTT/g, "")
      .replace(/\d\d:\d\d:\d\d\.\d\d\d --> .*?\n/g, "")
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\n+/g, " ")
      .trim();

    return transcript;
  } catch (err) {
    console.error("YT-DLP error:", err);
    throw new Error("Failed to fetch transcript");
  }
}