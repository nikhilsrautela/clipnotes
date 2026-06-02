import ytdlp from "yt-dlp-exec";

export async function getTranscript(url) {
  try {
    const output = await ytdlp(url, {
      dumpSingleJson: true,
      skipDownload: true,
      writeAutoSub: true,
      subLang: "en",
    });

    const subtitles =
      output.subtitles?.en ||
      output.automatic_captions?.en;

    if (!subtitles) {
      throw new Error("No captions available for this video");
    }

    // subtitles come as segmented text
    const transcript = subtitles
      .map(s => s.text || "")
      .join(" ");

    return transcript;
  } catch (err) {
    console.error("YT-DLP error:", err);
    throw new Error("Failed to fetch transcript");
  }
}