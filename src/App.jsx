import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./pages/List";
import Home from "./pages/Home";
// import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
