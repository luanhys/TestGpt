import React from "react";
import Sidebar from "../components/Sidebar";
import { Card, CardContent } from "../components/ui/Card";
import { BarChart2 } from "lucide-react";

export default function Analytics() {
  const usage = 428;
  const limit = 500;

  const topQuestions = [
    "When will the gold watch be back in stock?",
    "Do you offer international shipping?",
    "How can I return a product?",
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Analytics</h1>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <Card className="col-span-3">
            <CardContent className="p-5">
              <div className="font-semibold mb-2">GPT Usage</div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${(usage / limit) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">{usage} / {limit} GPT responses used</p>
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardContent className="p-5">
              <div className="font-semibold mb-2">Most Asked Questions</div>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {topQuestions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <BarChart2 size={18} /> Monthly Overview (Static)
              </div>
              <p className="text-sm text-gray-600">Chart integration coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
