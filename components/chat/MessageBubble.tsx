"use client";

type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export default function MessageBubble({
  role,
  content,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-indigo-600 text-white"
            : "bg-white border border-zinc-200 text-zinc-900"
        }`}
      >
        <div className="mb-2 text-xs font-semibold opacity-70">
          {isUser ? "You" : "AgentForge AI"}
        </div>

        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}