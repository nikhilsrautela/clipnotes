import { useState } from "react";
import ReactMarkdown from 'react-markdown'

export default function GenerateNotes() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");

  const handleGenerate = async () => {
    if (!url) return;

    setLoading(true);
    setNotes("");

    try {
      const res = await fetch("https://clipnotes-9gdr.onrender.com/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to generate notes");
      }

      setNotes(data.notes || data.message || "No notes generated");
    } catch (err) {
      setNotes(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!notes) return;
     try {
    await navigator.clipboard.writeText(notes);
    alert("Notes copied to clipboard!");
  } catch {
    alert("Failed to copy notes");
  }
  };

  const handleDownload = () => {
    if (!notes) return;

    const blob = new Blob([notes], { type: "text/plain" });
    const fileUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "clipnotes.txt";
    a.click();

    URL.revokeObjectURL(fileUrl);
  };

  const isError =
    typeof notes === "string" &&
    (notes.toLowerCase().includes("error") ||
      notes.toLowerCase().includes("failed"));

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">

      <div className="max-w-3xl mx-auto font-ppeditorialold m-10">

        <div className="flex items-center overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <input
            disabled={loading}
            type="text"
            placeholder="https://youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-6 py-5 outline-none text-gray-700"
          />
        
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="m-2 px-8 py-3 rounded-2xl bg-black text-white hover:bg-gray-900 transition cursor-pointer">

              {loading ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                Generating...
              </div>
            ) : (
              "Generate Notes"
            )}
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-500 text-center">Paste any YouTube video and get notes in seconds (No login required)</p>
           
      </div>

      
      {notes && (
        <div
          className={`mt-10 p-6 border rounded-2xl shadow-2xl whitespace-pre-line font-ppeditorialold ${
            isError
              ? "bg-red-50 border-red-300 text-red-700"
              : "bg-white"
          }`}>
        
          <div className="mb-4">
            <ReactMarkdown>{notes}</ReactMarkdown>
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <button
              onClick={handleCopy}
              className="px-5 py-3 rounded-xl border bg-white hover:bg-gray-100 transition shadow-sm cursor-pointer">
            
              📋 Copy
            </button>

            <button
              onClick={handleDownload}
              className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition shadow-md cursor-pointer">
            
              📥 Download (.txt)
            </button>
          </div>
        </div>
      )}   
    </section>
  );
}