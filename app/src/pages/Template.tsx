import { useState } from "react";
import BasicTemplate from "../components/templates/BasicTemplate";
import ModernTemplate from "../components/templates/ModernTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import { motion, AnimatePresence } from "framer-motion";

const templates = [
  { name: "Basic", component: BasicTemplate },
  { name: "Dashboard", component: DashboardTemplate },
  { name: "Modern", component: ModernTemplate },
];

export default function Template() {
  const [activeTemplate, setActiveTemplate] = useState(0);

  return (
    <div className="w-screen min-h-screen text-gray-800 overflow-x-hidden">
      {/* Header / Intro Section */}
      <motion.div
        className="h-[60vh] w-full flex flex-col items-center justify-center space-y-4 bg-indigo-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          Explore Our Template Journey
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
        >
          Scroll through a curated selection of templates
        </motion.p>
        <div className="mt-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>

      {/* Template Navigation */}
      <div className="flex justify-center space-x-4 my-8">
        {templates.map((template, index) => (
          <button
            key={template.name}
            onClick={() => setActiveTemplate(index)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeTemplate === index
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {template.name}
          </button>
        ))}
      </div>

      <motion.div
        className="text-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">
          {templates[activeTemplate].name} Template
        </h2>
        <p className="max-w-2xl mx-auto">
          {getTemplateDescription(templates[activeTemplate].name)}
        </p>
      </motion.div>

      {/* Template Display Section */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-300 p-4 md:p-16 lg:p-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTemplate}
            className="shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {templates[activeTemplate].component()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Template Description */}
    </div>
  );
}

function getTemplateDescription(templateName: string): string {
  switch (templateName) {
    case "Basic":
      return "A clean and simple layout perfect for personal websites or small businesses.";
    case "Dashboard":
      return "A data-rich interface ideal for admin panels or analytics platforms.";
    case "Modern":
      return "A sleek and contemporary design suitable for startups and tech companies.";
    default:
      return "";
  }
}
