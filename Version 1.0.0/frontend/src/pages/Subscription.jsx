import React from "react";
import Sidebar from "../components/Sidebar";
import { Button } from "../components/ui/Button";
import { CreditCard, CheckCircle, XCircle } from "lucide-react";

export default function Subscription() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-10 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Your Subscription</h1>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Standard Plan</h2>
              <p className="text-sm text-gray-600">€15/month · Billed monthly</p>
            </div>
            <CreditCard size={28} className="text-blue-600" />
          </div>

          <ul className="text-sm text-gray-700 mb-6 space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> 500 AI Responses/month
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Basic analytics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Email support
            </li>
          </ul>

          <div className="flex gap-4">
            <Button>Upgrade Plan</Button>
            <Button variant="outline" className="text-red-500 border-red-300 hover:bg-red-50">
              <XCircle size={16} /> Cancel Subscription
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
