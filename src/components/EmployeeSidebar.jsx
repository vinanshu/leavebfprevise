// components/EmployeeSidebar.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/background.png";
import "./Sidebar.css"; // Reuse the admin Sidebar CSS for the top navbar look

const EmployeeSidebar = () => {
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
          <span className="brand-title">Villanueva FireStation Employee</span>
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
          to="/employee/dashboard"
          className={`nav-item ${isTabActive("/employee/dashboard") ? "active" : ""}`}
        >
          <span className="nav-icon">👤</span> <span className="nav-text">Profile</span>
        </Link>

        <Link
          to="/employee/leave-dashboard"
          className={`nav-item ${isTabActive("/employee/leave-dashboard") ? "active" : ""}`}
        >
          <span className="nav-icon">📊</span> <span className="nav-text">Leave Dashboard</span>
        </Link>

        <Link
          to="/employee/leave-request"
          className={`nav-item ${isTabActive("/employee/leave-request") ? "active" : ""}`}
        >
          <span className="nav-icon">📝</span> <span className="nav-text">Leave Request</span>
        </Link>

        {/* Keeping the root logout path as requested in original file */}
        <Link
          to="/"
          className="nav-item logout-btn"
        >
          <span className="nav-icon">🚪</span> <span className="nav-text">Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default EmployeeSidebar;
