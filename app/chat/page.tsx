"use client";

import { useState } from "react";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="flex h-screen bg-zinc-100">

      {/* Sidebar */}
      <ChatSidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <ChatHeader />

        {/* Messages */}
        <ChatMessages messages={messages} />

        {/* Input */}
        <div className="border-t border-zinc-200 bg-white p-5">
          <ChatInput
            messages={messages}
            setMessages={setMessages}
          />
        </div>

      </div>

    </div>
  );
}