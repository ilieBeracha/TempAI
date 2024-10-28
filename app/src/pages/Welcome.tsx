import { NavLink } from "react-router-dom";

export default function Example() {
  return (
    <div className="pt-24 pb-80 sm:pt-32 flex flex-col items-center justify-center w-full h-full">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-base font-semibold text-blue-500 flex flex-col justify-center items-center">
            Start Building Your Page
          </h2>
          <p className="mx-auto max-w-lg text-center justify-center text-4xl font-semibold tracking-tight text-gray-950">
            Customize each section with AI-driven suggestions
          </p>
          <NavLink
            to={"/create"}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
}
