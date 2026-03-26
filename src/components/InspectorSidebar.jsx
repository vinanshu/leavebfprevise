// components/InspectorSidebar.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/background.png";
import "./Sidebar.css"; // Reuse the admin Sidebar CSS for the top navbar look

const InspectorSidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isTabActive = (href) => activeTab === href;

  return (
    <nav className="top-navbar">
      <div className="navbar-brand">
        <div className="brand-content">
          <img src={logo} alt="BFP Logo" />
          <span className="brand-title">Villanueva FireStation Inspector</span>
        </div>
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "show-mobile" : ""}`}>
        <Link
          to="/inspectorDashboard"
          className={`nav-item ${isTabActive("/inspectorDashboard") ? "active" : ""}`}
        >
          <span className="nav-icon">📊</span> <span className="nav-text">Dashboard</span>
        </Link>
        <Link
          to="/inspector/inventory"
          className={`nav-item ${isTabActive("/inspector/inventory") ? "active" : ""}`}
        >
          <span className="nav-icon">🔍</span> <span className="nav-text">Inventory Control</span>
        </Link>
        <Link
          to="/inspector/equipment"
          className={`nav-item ${isTabActive("/inspector/equipment") ? "active" : ""}`}
        >
          <span className="nav-icon">🛠️</span> <span className="nav-text">Equipment Inspection</span>
        </Link>
        <Link
          to="/inspector/report"
          className={`nav-item ${isTabActive("/inspector/report") || isTabActive("/inspector/report  ") ? "active" : ""}`}
        >
          <span className="nav-icon">📋</span> <span className="nav-text">Inspection Report</span>
        </Link>
        <Link
          to="/inspector/history"
          className={`nav-item ${isTabActive("/inspector/history") ? "active" : ""}`}
        >
          <span className="nav-icon">📅</span> <span className="nav-text">Inspection History</span>
        </Link>

        <Link to="/" className="nav-item logout-btn">
          <span className="nav-icon">🚪</span> <span className="nav-text">Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default InspectorSidebar;
