import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Search, CheckSquare, MessageSquare, HelpCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Welcome, Watch Shop King!</h2>

        <div className="grid grid-cols-3 gap-4">
          {/* Usage */}
          <Card className="col-span-3">
            <CardContent className="p-4">
              <div className="font-semibold mb-2">Usage</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85.6%" }}></div>
              </div>
              <p className="text-sm text-gray-600">428 / 500 GPT Responses</p>
            </CardContent>
          </Card>

          {/* Products */}
          <Card>
            <CardContent className="p-4">
              <div className="font-semibold mb-2">Products in Bot</div>
              <div className="relative mb-2">
                <Input placeholder="Search..." className="pl-8" />
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-400" />
              </div>
              <p className="text-sm">“When will the gold watch be back in stock?”</p>
            </CardContent>
          </Card>

          {/* Subscription */}
          <Card>
            <CardContent className="p-4">
              <div className="font-semibold mb-1">Subscription</div>
              <p className="text-sm">Standard</p>
              <p className="text-sm text-gray-600 mb-2">€15/mo</p>
              <Button>Upgrade</Button>
            </CardContent>
          </Card>
        </div>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <Button variant="outline" className="flex gap-2 items-center">
            <CheckSquare size={16} /> Edit product list
          </Button>
          <Button variant="outline" className="flex gap-2 items-center">
            <MessageSquare size={16} /> Customize answers
          </Button>
          <Button variant="outline" className="flex gap-2 items-center">
            <HelpCircle size={16} /> Contact support
          </Button>
        </div>
      </main>
    </div>
  );
}
