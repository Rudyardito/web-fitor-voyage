import "./App.css";
import Works from "./components/works/Works";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Works" element={<Works />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
