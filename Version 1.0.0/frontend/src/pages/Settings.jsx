import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function Settings() {
  const [shopName, setShopName] = useState("Watch Shop King");
  const [language, setLanguage] = useState("English");
  const [tone, setTone] = useState("Friendly");
  const [botActive, setBotActive] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-10 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="max-w-xl space-y-6">
          {/* Shop Name */}
          <div>
            <label className="block mb-1 font-medium">Shop Name</label>
            <Input
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              placeholder="Enter your shop name"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block mb-1 font-medium">Bot Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option>English</option>
              <option>Deutsch</option>
              <option>Français</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block mb-1 font-medium">Response Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option>Neutral</option>
              <option>Friendly</option>
              <option>Formal</option>
            </select>
          </div>

          {/* Bot Activation */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={botActive}
              onChange={() => setBotActive(!botActive)}
              id="botToggle"
              className="h-4 w-4"
            />
            <label htmlFor="botToggle" className="text-sm">
              Activate Bot Responses
            </label>
          </div>

          <Button className="mt-4">Save Changes</Button>
        </div>
      </main>
    </div>
  );
}
