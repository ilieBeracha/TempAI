import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import CreateTemplate from "./pages/CreateTemplate";
import DemoTemplate from "./pages/DemoTemplatePreview";
import DynamicGrid from "./pages/DynamicGrid";

function App() {
  return (
    <div
      className=" w-screen bg-[#1F2E4F]"
      style={{
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/create" element={<CreateTemplate />}></Route>
        <Route path="/template" element={<DemoTemplate />}></Route>
        <Route path="/dynamic-grid" element={<DynamicGrid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
