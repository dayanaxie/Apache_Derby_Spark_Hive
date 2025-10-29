import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import HistoricalPage from "./pages/HistoricalPage";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/admisiones" element={<AdmissionsPage />} />
          <Route path="/historicos" element={<HistoricalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
