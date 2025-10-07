import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/index.css";
import Home from "./pages/Home";
import UserPage from "./pages/User/UserPage";
import "@fontsource/radley";
import "@fontsource-variable/space-grotesk";
import Footer from "./components/Footer/Footer";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </>
);
