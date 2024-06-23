import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/404.jsx";
import FullArtikel from "./pages/FullArtikel.jsx";
import Artikel from "./pages/Artikel.jsx";
import Videos from "./pages/Videos.jsx";
import FullVideo from "./pages/FullVideo.jsx";
import Konseling from "./pages/Konseling.jsx";
import Chat from "./pages/Chat.jsx";
import Login from "./pages/login/Login.jsx";
import Webiner from "./pages/Webiner.jsx";

const App = () => (
  <Router >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/video" element={<Videos />} />
      <Route path="/konseling" element={<Konseling />} />
      <Route path="/yumi" element={<Chat />} />
      <Route path="/artikel/:id" element={<FullArtikel />} />
      <Route path="/video/:id" element={<FullVideo />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Webiner" element={<Webiner />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
