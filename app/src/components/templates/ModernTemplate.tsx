export default function ModernTemplate() {
  return (
    <div
      className="w-full grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] bg-gray-50 text-gray-800"
      style={{
        height: "80vh",
      }}
    >
      {/* Header */}
      <header className="col-span-2 bg-blue-700 text-white p-6 flex items-center justify-between shadow-lg">
        <h1 className="text-2xl font-bold">Modern AI Dashboard</h1>
        <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-200 shadow-md">
          Add New Item
        </button>
      </header>

      {/* Sidebar Navigation */}
      <nav className="bg-gray-100 p-6 shadow-md">
        <ul className="space-y-3 text-gray-600 font-medium">
          {["Home", "Projects", "Templates", "Analytics", "Settings"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block p-3 rounded hover:bg-blue-100 hover:text-blue-700 transition duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="bg-white m-6 p-8 rounded-xl shadow-lg overflow-auto space-y-8">
        {/* Dashboard Summary Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Dashboard Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Active Projects",
              "Templates Available",
              "New Users",
              "Total Revenue",
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md flex flex-col items-center"
              >
                <span className="text-4xl font-bold">42</span>
                <p className="mt-2 text-lg">{stat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3">
            {[
              "Completed Component Generator",
              "Updated Template Styles",
              "Reviewed Project Stats",
            ].map((activity, index) => (
              <li
                key={index}
                className="p-4 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-between"
              >
                <span>{activity}</span>
                <span className="text-gray-500 text-sm">Just Now</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Quick Links Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Create New Project",
              "Explore Templates",
              "View Analytics",
              "Settings",
            ].map((link) => (
              <button
                key={link}
                className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition duration-200"
              >
                {link}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
