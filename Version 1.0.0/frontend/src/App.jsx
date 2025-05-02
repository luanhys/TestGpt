import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import Abonnement from "./pages/Abonnement";
import Subscription from "./pages/Subscription";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Answers from "./pages/Answers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/abonnement" element={<Abonnement />} />
      </Routes>
    </BrowserRouter>
  );
}
