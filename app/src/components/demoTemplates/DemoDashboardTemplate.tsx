import { motion } from "framer-motion";
import {
  PieChart,
  BarChart,
  Activity,
  Settings,
  Layout,
  Users,
  HelpCircle,
} from "lucide-react";

const menuItems = [
  { name: "Overview", icon: Layout },
  { name: "Examples", icon: PieChart },
  { name: "Showcase", icon: BarChart },
  { name: "Statistics", icon: Activity },
  { name: "Team", icon: Users },
  { name: "Preferences", icon: Settings },
];

const recentActivities = [
  "Viewed Button Examples",
  "Explored Landing Templates",
  "Updated Profile Settings",
  "Checked Analytics Report",
];

const quickActions = [
  { name: "View Demo", icon: Layout },
  { name: "Templates", icon: BarChart },
  { name: "Settings", icon: Settings },
  { name: "Support", icon: HelpCircle },
];

export default function DashboardTemplate() {
  return (
    <div
      className=" w-full flex bg-gray-100 text-gray-800"
      style={{
        height: "80vh",
      }}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 py-8">
          <h1 className="text-2xl font-bold text-emerald-600">AI Dashboard</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </motion.a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-200 shadow-sm">
              View Demo
            </button>
          </div>
        </header>

        <div className=" mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Overview Card */}
            <motion.div
              className="bg-white overflow-hidden shadow-sm rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Overview
                </h3>
                <p className="text-gray-600">
                  Welcome to the Demo Dashboard. Explore examples, view
                  templates, and discover the possibilities.
                </p>
              </div>
            </motion.div>

            {/* Recent Activities Card */}
            <motion.div
              className="bg-white overflow-hidden shadow-sm rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Recent Activities
                </h3>
                <ul className="space-y-2">
                  {recentActivities.map((activity, index) => (
                    <li key={index} className="text-gray-600">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Quick Actions Card */}
            <motion.div
              className="bg-white overflow-hidden shadow-sm rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      className="flex items-center justify-center p-3 bg-emerald-50 rounded-md text-emerald-600 hover:bg-emerald-100 transition duration-200"
                    >
                      <action.icon className="w-5 h-5 mr-2" />
                      {action.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* New Statistics Card */}
            <motion.div
              className="bg-white overflow-hidden shadow-sm rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Components</span>
                    <span className="font-semibold">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-semibold">128</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Templates Made</span>
                    <span className="font-semibold">15</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* New Notifications Card */}
            <motion.div
              className="bg-white overflow-hidden shadow-sm rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Notifications
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">
                    New component template available
                  </li>
                  <li className="text-gray-600">
                    System update scheduled for next week
                  </li>
                  <li className="text-gray-600">
                    3 new users joined your team
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* New Performance Chart Card */}
            <motion.div
              className="bg-white overflow-hidden shadow-sm rounded-lg col-span-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Performance Chart
                </h3>
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">Chart Placeholder</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
