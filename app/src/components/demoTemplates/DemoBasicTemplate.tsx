import {
  Settings,
  Search,
  Plus,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function EnhancedDashboard() {
  const recentProjects = [
    {
      name: "Landing Page Design",
      type: "Website",
      progress: 85,
    },
    {
      name: "Custom Button Component",
      type: "Component",
      progress: 65,
    },
    {
      name: "Form Builder",
      type: "Interactive",
      progress: 45,
    },
    {
      name: "Interactive Chart",
      type: "Data Visualization",
      progress: 90,
    },
  ];

  const features = [
    "Real-time collaboration on component editing",
    "Expanded template library with 100+ new designs",
    "Enhanced export options for all major frameworks",
    "Custom theme builder and style management",
  ];

  return (
    <div
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
      style={{
        height: "80vh",
      }}
    >
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Component Generator
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search components..."
                className="bg-gray-700/50 border border-gray-600 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Create New</span>
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Basic</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Transform your ideas into reality with AI-powered component
            generation. Start by selecting a component type or customize
            existing templates to craft the perfect pieces for your project.
          </p>
        </section>

        {/* Recent Projects Grid */}
        <section className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Projects</h2>
            <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 transition-colors">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-700/50 p-5 rounded-xl hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.type}</p>
                  </div>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-blue-400">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700/50">
          <h2 className="text-2xl font-bold mb-6">Upcoming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-700/50"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
