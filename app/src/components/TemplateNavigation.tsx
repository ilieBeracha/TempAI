import { NavLink } from "react-router-dom";

interface TemplateNavigationProps {
  templates: Array<{ name: string }>;
  activeTemplate: number;
  setActiveTemplate: (index: number) => void;
}

export default function TemplateNavigation({
  templates,
  activeTemplate,
  setActiveTemplate,
}: TemplateNavigationProps) {
  return (
    <div className="flex justify-center space-x-4 my-8 bg-[#FCFCFC] p-2 w-fit shadow-lg rounded-xl border border-gray-300">
      {templates.map((template, index) => (
        <button
          key={template.name}
          onClick={() => setActiveTemplate(index)}
          className={`px-2 py-2 rounded-full transition-colors focus:outline-none hover:bg-gray-300 hover:border-gray-400 ${
            activeTemplate === index
              ? "bg-transparent text-gray-800"
              : "bg-transparent text-gray-800 hover:bg-gray-300"
          }`}
        >
          {template.name}
        </button>
      ))}

      <NavLink
        to={"/dynamic-grid"}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Create Your Own
      </NavLink>
    </div>
  );
}
