import React from "react";
import {
  Search,
  ChevronLeft,
  LayoutGrid,
  MessageCircle,
  Layers,
  Users,
  HelpCircle,
  Sun,
  Home,
  Settings,
  Bell,
  FileText,
  PlusCircle,
} from "lucide-react";

export default function ModernDashboard() {
  const audiences = [
    {
      id: "01",
      title: "Dashboard Overview",
      description:
        "Get a quick overview of your system's performance and key metrics at a glance.",
    },
    {
      id: "02",
      title: "User Management",
      description:
        "Manage user accounts, permissions, and roles with our comprehensive tools.",
    },
    {
      id: "03",
      title: "Analytics & Reports",
      description:
        "Detailed insights and analytics to help you make data-driven decisions.",
    },
    {
      id: "04",
      title: "System Settings",
      description:
        "Configure and customize your system settings to match your requirements.",
    },
  ];

  return (
    <div className="flex h-screen bg-[#1a1f37] text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-6 flex flex-col">
        <div className="mb-8">
          <div className="text-2xl font-bold text-purple-400">Dashboard</div>
        </div>

        <nav className="flex-1 space-y-2">
          <div className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-lg cursor-pointer">
            <Home size={20} />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-lg cursor-pointer">
            <FileText size={20} />
            <span>Documents</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-lg cursor-pointer">
            <Bell size={20} />
            <span>Notifications</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-purple-400 bg-gray-800/30 rounded-lg cursor-pointer">
            <Users size={20} />
            <span>Team</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-lg cursor-pointer">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </nav>

        <div className="mt-auto space-y-4">
          <div className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-lg cursor-pointer">
            <Sun size={20} />
          </div>
          <div className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-lg cursor-pointer">
            <ChevronLeft size={20} />
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Search Header */}
        <div className="p-6 relative">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <div className="relative bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl mb-4">Search Dashboard</h2>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Users className="text-purple-400" />
            Dashboard Sections
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {audiences.map((audience) => (
              <div
                key={audience.id}
                className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{audience.title}</h3>
                  <span className="text-purple-400">{audience.id}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 text-center text-gray-500 text-sm">
          © 2024. All rights reserved | Modern Dashboard
        </footer>
      </main>
    </div>
  );
}
