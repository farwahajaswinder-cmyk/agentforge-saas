"use client";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">AI Assistant</h1>
        <p className="text-sm text-gray-500">
          Powered by Groq AI
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        <span className="text-sm text-gray-600">
          Online
        </span>
      </div>
    </header>
  );
}