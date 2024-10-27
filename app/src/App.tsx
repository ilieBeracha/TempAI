import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import CreateTemplate from "./pages/CreateTemplate";
import RetroGrid from "./components/ui/retro-grid";
import Template from "./pages/Template";

function App() {
  return (
    <div
      className="bg-gray-50 w-screen"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <RetroGrid /> */}

      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/create" element={<CreateTemplate />}></Route>
        <Route path="/template" element={<Template />}></Route>
      </Routes>
    </div>
  );
}

export default App;
