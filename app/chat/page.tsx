"use client";

import { useState, useRef, useEffect } from "react";
import { Loader2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

type Message = {
  type: "user" | "bot";
  text: string;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { type: "user", text: query } as const;
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      const botMessage = { type: "bot", text: data.response } as const;
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry, there was an error processing your request.",
        } as const,
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    // Scroll to bottom when new message added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className="min-h-screen flex flex-col bg-green-50 dark:bg-black">
    <Navbar/>
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl w-full mb-[50px] mx-auto"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xl rounded-lg px-4 py-3 text-sm whitespace-pre-wrap ${
              msg.type === "user"
                ? "bg-green-100 dark:bg-green-800 self-end ml-auto"
                : "bg-white dark:bg-green-700"
            } shadow`}
            dangerouslySetInnerHTML={{ __html: markdownToHtml(msg.text) }}
          />
        ))}

        {loading && (
          <div className="text-sm text-gray-500 dark:text-gray-400">Thinking...</div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bottom-0 fixed rounded m-6 w-full px-4"
      >
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about any health condition..."
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={loading || !query.trim()}
            className="bg-green-600 hover:bg-green-700 mr-10"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, "<h3 class='text-base font-semibold mt-4'>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class='text-lg font-bold mt-6'>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1 class='text-xl font-bold mt-8'>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)+/g, (match) => {
      return `<ul class="list-disc ml-6 space-y-1">${match}</ul>`;
    })
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br>");

  html = `<p>${html}</p>`;
  return html;
}
