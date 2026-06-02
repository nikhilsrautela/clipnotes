import { useState } from "react";

export default function GenerateNotes() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");

  const handleGenerate = () => {
    if (!url) return;

    setLoading(true);
    setNotes("");

    // simulate AI delay
    setTimeout(() => {
      const fakeNotes = `
📌 Key Takeaways:
- This video explains the core concept clearly
- Important ideas are broken into simple steps
- Real-world examples are provided

🧠 Summary:
The video focuses on simplifying complex topics into structured learning notes.

💡 Action Points:
- Review the main ideas
- Practice key concepts
- Rewatch difficult sections
      `;

      setNotes(fakeNotes);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
        

 <div className="max-w-3xl mx-auto font-ppeditorialold m-10">
  <div className="flex items-center overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">

    <input
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
    Paste any YouTube video and get AI-powered notes in seconds.
  </p>
</div>

      {/* Output Section */}
      {notes && (
        <div className="mt-10 p-6 bg-white border rounded-2xl shadow-md whitespace-pre-line">
          {notes}
        </div>
      )}

    </section>
  );
}