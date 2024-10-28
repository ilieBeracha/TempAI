import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

type ContentType = "header" | "navbar" | "content" | "sidebar" | "footer";

interface GridItem {
  i: string;
  text: string;
  type: ContentType;
}

const getBackgroundColor = (type: ContentType) => {
  switch (type) {
    case "header":
      return "bg-[#1a1a1a] text-white";
    case "navbar":
      return "bg-[#242424] text-white";
    case "content":
      return "bg-[#2a2a2a] text-white";
    case "sidebar":
      return "bg-[#242424] text-white";
    case "footer":
      return "bg-[#1a1a1a] text-white";
    default:
      return "bg-[#2a2a2a] text-white";
  }
};

export default function DynamicGrid() {
  const [items, setItems] = useState<GridItem[]>([
    { i: "header", text: "Header", type: "header" },
    { i: "navbar", text: "Navigation", type: "navbar" },
    { i: "content", text: "Main Content", type: "content" },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [layout, setLayout] = useState<Layout[]>([
    { i: "header", x: 0, y: 0, w: 12, h: 2 },
    { i: "navbar", x: 0, y: 2, w: 2, h: 8 },
    { i: "content", x: 2, y: 2, w: 10, h: 8 },
  ]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  const handleNameChange = (id: string, newName: string) => {
    setItems(
      items.map((item) => (item.i === id ? { ...item, text: newName } : item))
    );
  };

  const addNewItem = (type: ContentType) => {
    const uniqueTypes = ["header", "footer", "navbar", "sidebar"];
    if (uniqueTypes.includes(type)) {
      const exists = items.some((item) => item.type === type);
      if (exists) {
        console.log(`Only one ${type} component is allowed`);
        return;
      }
    }

    const id = `${type}-${items.length + 1}`;
    const newItem: GridItem = {
      i: id,
      text: `${type.charAt(0).toUpperCase() + type.slice(1)}`,
      type: type,
    };
    setItems([...items, newItem]);
    setLayout([...layout, { i: id, ...getDefaultLayoutForType(type) }]);
    setIsDropdownOpen(false); // Close dropdown after adding
  };

  const getDefaultLayoutForType = (type: ContentType) => {
    switch (type) {
      case "header":
        return { x: 0, y: 0, w: 12, h: 2 };
      case "navbar":
        return { x: 0, y: 2, w: 2, h: 8 };
      case "content":
        return { x: 2, y: 2, w: 10, h: 8 };
      case "sidebar":
        return { x: 10, y: 2, w: 2, h: 6 };
      case "footer":
        return { x: 0, y: 10, w: 12, h: 2 };
      default:
        return { x: 0, y: 0, w: 6, h: 2 };
    }
  };

  const deleteItem = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    e.preventDefault();
    setItems(items.filter((item) => item.i !== id));
    setLayout(layout.filter((item) => item.i !== id));
  };

  const componentTypes: { label: string; value: ContentType }[] = [
    { label: "Header", value: "header" },
    { label: "Navigation", value: "navbar" },
    { label: "Content", value: "content" },
    { label: "Sidebar", value: "sidebar" },
    { label: "Footer", value: "footer" },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="mb-8 bg-[#1a1a1a] p-6 rounded-lg border border-[#333] backdrop-blur-xl relative z-50">
        <div className="flex items-center gap-6">
          <span className="text-white/80 text-sm font-medium whitespace-nowrap">
            Add Component:
          </span>

          <div className="relative">
            <button
              className="w-[200px] px-4 py-2 text-sm font-medium text-white/80 bg-[#2a2a2a] border border-[#333] rounded-md hover:bg-[#333] hover:text-white transition-all duration-200 flex items-center justify-between"
              onClick={toggleDropdown}
            >
              <span>Select Component</span>
              <svg
                className="w-4 h-4 opacity-60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#2a2a2a] border border-[#333] rounded-md shadow-xl z-50">
                {componentTypes.map((type) => {
                  const isExisting = items.some(
                    (item) => item.type === type.value
                  );
                  const isUnique = [
                    "header",
                    "footer",
                    "navbar",
                    "sidebar",
                  ].includes(type.value);

                  return (
                    <button
                      key={type.value}
                      onClick={() => addNewItem(type.value)}
                      disabled={isUnique && isExisting}
                      className={`w-full px-4 py-2.5 text-sm font-medium text-left flex items-center gap-3
                        ${
                          isUnique && isExisting
                            ? "text-white/30 bg-[#222] cursor-not-allowed"
                            : "text-white/80 hover:bg-[#333] hover:text-white"
                        } transition-all duration-200`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          type.value === "header"
                            ? "bg-blue-400"
                            : type.value === "navbar"
                            ? "bg-green-400"
                            : type.value === "content"
                            ? "bg-yellow-400"
                            : type.value === "sidebar"
                            ? "bg-purple-400"
                            : "bg-gray-400"
                        } ${isUnique && isExisting ? "opacity-30" : ""}`}
                      ></div>
                      {type.label}
                      {isUnique && isExisting && (
                        <span className="ml-auto text-xs text-white/30">
                          Already added
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex-1 border-b border-white/10"></div>
        </div>
      </div>

      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        onLayoutChange={handleLayoutChange}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        isDraggable={true}
        isResizable={true}
        margin={[16, 16]}
      >
        {items.map((item) => (
          <div
            key={item.i}
            className={`${getBackgroundColor(
              item.type
            )} rounded-lg border border-[#333] shadow-lg flex flex-col items-center justify-center relative group transition-all duration-300`}
          >
            <div
              className="absolute top-3 right-3 z-[9999] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={(e) => deleteItem(e, item.i)}
            >
              <button className="w-8 h-8 rounded-md bg-[#2a2a2a]/90 border border-[#333] hover:bg-red-900/80 hover:border-red-800/80 text-white/60 hover:text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center gap-3 p-6">
              <input
                type="text"
                value={item.text}
                onChange={(e) => handleNameChange(item.i, e.target.value)}
                className="text-base font-medium text-white/90 text-center bg-transparent border-b border-transparent hover:border-[#444] focus:border-[#666] focus:outline-none transition-all duration-200 px-2 py-1"
                spellCheck="false"
              />
              <span className="text-[11px] font-medium text-white/40 tracking-wider uppercase">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
