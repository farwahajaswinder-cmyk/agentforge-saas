"use client";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface ChatMessagesProps {
  messages?: Message[];
}

export default function ChatMessages({
  messages = [],
}: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-zinc-100">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-800">
              Welcome to AgentForge AI
            </h2>

            <p className="mt-3 text-zinc-500">
              Start a conversation with your AI assistant.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-2xl rounded-2xl px-5 py-3 shadow ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-zinc-900"
                }`}
              >
                <p className="whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}