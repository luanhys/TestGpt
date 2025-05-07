import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function Support() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier könnte später ein API-Request kommen
    alert("Your support request has been sent.");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Support</h1>

        <div className="max-w-xl space-y-6 bg-white shadow p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            Need help with your bot setup or account? Contact our support team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <Input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="w-full border rounded px-3 py-2 text-sm min-h-[120px]"
              />
            </div>

            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
