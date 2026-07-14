"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AgentForge?",
    answer:
      "AgentForge is an AI SaaS platform that lets you build, deploy, and manage intelligent AI agents.",
  },
  {
    question: "Can I use AgentForge for free?",
    answer:
      "Yes. We offer a free plan so you can explore the platform before upgrading.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "You can connect OpenAI, Claude, Gemini, Grok, Mistral, DeepSeek, and other leading AI models.",
  },
  {
    question: "Can I upgrade my subscription later?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription at any time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about AgentForge.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}