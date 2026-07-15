"use client";

import Link from "next/link";

export default function ChatSidebar() {
  return (
    <aside className="w-72 bg-zinc-900 text-white flex flex-col border-r border-zinc-800">
      {/* Logo */}
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold">AgentForge</h1>
        <p className="text-sm text-zinc-400">
          AI Workspace
        </p>
      </div>

      {/* New Chat */}
      <div className="p-4">
        <button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium hover:bg-blue-700 transition">
          + New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-4">
        <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
          Recent Chats
        </p>

        <div className="space-y-2">
          <button className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-left hover:bg-zinc-700">
            🚀 Build SaaS Website
          </button>

          <button className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-left hover:bg-zinc-700">
            💻 React Help
          </button>

          <button className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-left hover:bg-zinc-700">
            🤖 AI Ideas
          </button>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-zinc-800 p-4 space-y-2">
        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-3 hover:bg-zinc-800"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/"
          className="block rounded-lg px-4 py-3 hover:bg-zinc-800"
        >
          🏠 Home
        </Link>

        <button className="w-full rounded-lg bg-red-600 px-4 py-3 hover:bg-red-700">
          Logout
        </button>
      </div>
    </aside>
  );
}