import React from 'react';

export default function BotControlDashboard() {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-semibold text-gray-900">BotControl</h1>
      <p className="text-gray-600 mt-1">Welcome, Watch Shop König!</p>

      {/* Usage */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-1">Usage</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85.6%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">428 / 500 GPT Responses</p>
      </div>

      {/* Products in Bot */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <p className="text-sm font-medium text-gray-700">Products in Bot</p>
        <p className="text-gray-500 mt-1 italic">“When will the gold watch be back in stock?”</p>
        <p className="text-xl font-semibold text-right mt-2">37</p>
      </div>

      {/* Subscription */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-700">Subscription</p>
          <p className="text-gray-600 mt-1">€15/mo</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-800">Standard</p>
          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700">Upgrade</button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-3">
        <button className="w-full flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50">
          <span className="text-blue-600 text-xl">📋</span>
          <span className="text-blue-600 font-medium">Edit Product List</span>
        </button>
        <button className="w-full flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50">
          <span className="text-blue-600 text-xl">✏️</span>
          <span className="text-blue-600 font-medium">Customize Responses</span>
        </button>
        <button className="w-full flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50">
          <span className="text-blue-600 text-xl">🛟</span>
          <span className="text-blue-600 font-medium">Contact Support</span>
        </button>
      </div>
    </div>
  );
}
