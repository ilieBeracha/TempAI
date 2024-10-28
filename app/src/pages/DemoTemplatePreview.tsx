import { useState } from "react";
import { motion } from "framer-motion";
import BasicTemplate from "../components/demoTemplates/DemoBasicTemplate";
import ModernTemplate from "../components/demoTemplates/DemoModernTemplate";
import DashboardTemplate from "../components/demoTemplates/DemoDashboardTemplate";
import TemplateHeader from "../components/TemplateHeader";
import TemplateNavigation from "../components/TemplateNavigation";
import TemplateDisplay from "../components/TemplateDisplay";

const templates = [
  { name: "Basic", component: BasicTemplate },
  { name: "Dashboard", component: DashboardTemplate },
  { name: "Modern", component: ModernTemplate },
];

export default function DemoTemplate() {
  const [activeTemplate, setActiveTemplate] = useState(0);

  return (
    <div className="w-screen min-h-screen text-gray-800 overflow-x-hidden bg-[#FCFCFC] flex flex-col items-center ">
      <TemplateHeader />
      <TemplateNavigation
        templates={templates}
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />

      <motion.div
        className="text-center "
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        key={activeTemplate}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">
          {templates[activeTemplate].name} Template
        </h2>
        <p className="max-w-2xl mx-auto">
          {getTemplateDescription(templates[activeTemplate].name)}
        </p>
      </motion.div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        key={`template-${activeTemplate}`}
        transition={{
          duration: 0.3,
          ease: [0.645, 0.045, 0.355, 1], // cubic-bezier for sharper motion
        }}
      >
        <TemplateDisplay
          activeTemplate={activeTemplate}
          component={templates[activeTemplate].component}
        />
      </motion.div>
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
