import { useState } from "react";

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

    setNotes(data.notes);

  } catch (err) {
    setNotes(err.message); // 👈 SHOW REAL ERROR
  } finally {
    setLoading(false);
  }
};


const handleCopy = () => {
  if (!notes) return;

  navigator.clipboard.writeText(notes);
  alert("Notes copied to clipboard!");
};

const handleDownload = () => {
  if (!notes) return;

  const blob = new Blob([notes], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "clipnotes.txt";
  a.click();

  URL.revokeObjectURL(url);
};


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
      className="m-2 px-8 py-3 rounded-2xl bg-black text-white hover:bg-gray-900 transition cursor-pointer"
    >
      {loading ? "Generating..." : "Generate Notes"}
    </button>

  </div>

  <p className="mt-3 text-sm text-gray-500 text-center">
    Paste any YouTube video and get AI-powered notes in seconds.(No login required)
  </p>
</div>

      {/* Output Section */}
     {notes && (
  <div className={`mt-10 p-6 border rounded-2xl shadow-2xl whitespace-pre-line font-ppeditorialold ${
    typeof notes === "string" && notes.toLowerCase().includes("error") || notes.toLowerCase().includes("failed")
      ? "bg-red-50 border-red-300 text-red-700"
      : "bg-white"
  }`}>

    {/* 🔥 ADD THIS */}
    <div className="mb-4">
      {notes}
    </div>

    <div className="mt-6 flex gap-4 justify-center">

    {/* Copy Button */}
    <button
      onClick={handleCopy}
      className="px-5 py-3 rounded-xl border bg-white hover:bg-gray-100 transition shadow-sm cursor-pointer"
    >
      📋 Copy
    </button>

    
    <button
      onClick={handleDownload}
      className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition shadow-md cursor-pointer"
    >
      📥 Download (.txt)
    </button>

  </div>
        </div>
      )}

    </section>
  );
}