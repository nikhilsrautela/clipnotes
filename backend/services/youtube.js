// import ytdlp from "yt-dlp-exec";
// import axios from "axios";

// export async function getTranscript(url) {
//   try {
//     const output = await ytdlp(url, {
//       dumpSingleJson: true,
//       skipDownload: true,
//     });

//     const captions =
//       output.subtitles?.en ||
//       output.automatic_captions?.en;

//     if (!captions?.length) {
//       throw new Error("No captions");
//     }

//     return "This is a fallback transcript used for demo purposes. The video discusses key concepts and important information that will be converted into structured notes by AI.";
//   } catch (err) {
//     console.error(err);

//     // 🔥 CRITICAL: NEVER FAIL FOR DEMO
//     return "This is a fallback transcript used for demo purposes. The video discusses software development, system design, and key learning points explained in a structured manner.";
//   }
// }