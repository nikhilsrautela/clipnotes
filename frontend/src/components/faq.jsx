import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Clipnotes?",
    answer:
      "Clipnotes turns YouTube videos into structured, easy-to-read AI-generated notes in seconds.",
  },
  {
    question: "Is Clipnotes free to use?",
    answer:
      "Yes, you can start using Clipnotes for free. No signup is required to generate basic notes.",
  },
  {
    question: "How does Clipnotes work?",
    answer:
      "Simply paste a YouTube link, and our AI analyzes the video, extracts key points, and creates organized notes instantly.",
  },
  {
    question: "Can I export or save my notes?",
    answer:
      "Yes, you can copy, save, or export your generated notes for later study or sharing.",
  },
  {
    question: "Does it work with all YouTube videos?",
    answer:
      "It works with most public YouTube videos including lectures, tutorials, podcasts, and interviews.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-3xl mx-auto py-24 px-6 font-ppeditorialold">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-500">
          Everything you need to know about Clipnotes.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>

                {isOpen ? (
                  <Minus className="w-5 h-5 text-gray-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`px-5 pb-5 text-gray-600 leading-relaxed transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}