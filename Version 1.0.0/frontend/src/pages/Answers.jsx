import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/Input";
import { Search } from "lucide-react";

export default function Answers() {
  const [search, setSearch] = useState("");

  const logs = [
    {
      user: "Lena S.",
      platform: "Instagram",
      question: "Do you ship to Austria?",
      response: "Yes, we ship to Austria. Delivery takes 3–5 days.",
      timestamp: "2025-05-01T17:35:00Z",
    },
    {
      user: "Tim M.",
      platform: "Website",
      question: "When will the gold watch be back?",
      response: "The gold watch is expected next week.",
      timestamp: "2025-05-01T20:15:00Z",
    },
    {
      user: "Sophie K.",
      platform: "WhatsApp",
      question: "Can I return a damaged item?",
      response: "Yes, damaged items can be returned within 14 days.",
      timestamp: "2025-04-30T10:02:00Z",
    },
  ];

  const filtered = logs.filter((entry) =>
    entry.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-10 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">User Conversations</h1>

        {/* Search */}
        <div className="mb-6 relative w-full max-w-md">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search messages..."
            className="pl-10"
          />
          <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
        </div>

        {/* Logs */}
        <div className="grid gap-4">
          {filtered.length > 0 ? (
            filtered.map((log, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow flex flex-col gap-2 hover:shadow-md transition"
              >
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    <strong>{log.user}</strong> · {log.platform}
                  </span>
                  <span>
                    {new Date(log.timestamp).toLocaleDateString()} ·{" "}
                    {new Date(log.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="text-gray-800">
                  <p className="mb-1">
                    <strong>User:</strong> {log.question}
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong>AI:</strong> {log.response}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 italic">No messages found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
