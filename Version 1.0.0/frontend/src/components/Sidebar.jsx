// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  List,
  MessageSquare,
  CreditCard,
  BarChart,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const navItemClass = ({ isActive }) =>
    `flex items-center gap-2 p-2 rounded ${
      isActive ? "bg-gray-700 text-white" : "hover:text-gray-300"
    }`;

  return (
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4 h-screen">
        <h1 className="text-2xl font-bold mb-6">BotControl</h1>
        <nav className="space-y-2">
          <NavLink to="/" className={navItemClass}>
            <LayoutDashboard size={18}/> Dashboard
          </NavLink>
          <NavLink to="/products" className={navItemClass}>
            <List size={18}/> Products
          </NavLink>
          <NavLink to="/answers" className={navItemClass}>
            <MessageSquare size={18}/> Answers
          </NavLink>
          <NavLink to="/analytics" className={navItemClass}>
            <BarChart size={18}/> Analytics
          </NavLink>
          <NavLink to="/settings" className={navItemClass}>
            <Settings size={18}/> Settings
          </NavLink>
          <NavLink to="/subscription" className={navItemClass}>
            <CreditCard size={18}/> Subscription
          </NavLink>
          <NavLink to="/support" className={navItemClass}>
            <HelpCircle size={18}/> Support
          </NavLink>
        </nav>
      </aside>
  );
}
