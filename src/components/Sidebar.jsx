import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/background.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
    setIsMobileMenuOpen(false); // Close menu on route change
    setOpenDropdown(null); // Close any open dropdowns
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (id) => {
    // If setting the same dropdown, close it, otherwise open the new one
    setOpenDropdown(openDropdown === id ? null : id);
  };


  const isTabActive = (href) => activeTab === href;

  const dropdownSections = [
    {
      id: "personnel",
      title: "Personnel Records",
      icon: "👥",
      items: [
        { href: "/personnelProfile", icon: "📁", text: "Personnel Profile (201)" },
        { href: "/leaveRecords", icon: "🗄️", text: "Leave Requests" },
        { href: "/clearanceRecords", icon: "💾", text: "Clearance Requests" },
        { href: "/personnelRegister", icon: "🧑‍💼", text: "Register Personnel" },
      ],
    },
    {
      id: "morale",
      title: "Morale & Welfare",
      icon: "❤️",
      items: [
        { href: "/medicalRecords", icon: "🩺", text: "Medical Records" },
        { href: "/awardsCommendations", icon: "🏅", text: "Awards & Commendations" },
      ],
    },
    {
      id: "hr",
      title: "HR Management",
      icon: "🧑‍🤝‍🧑",
      items: [
        { href: "/leaveManagement", icon: "🗓️", text: "Leave Management" },
        { href: "/inventoryControl", icon: "📦", text: "Inventory Control" },
        { href: "/clearanceSystem", icon: "🪪", text: "Clearance System" },
        { href: "/personnelRecentActivity", icon: "🕓", text: "Activity Logs" },
        { href: "/promotion", icon: "📈", text: "Promotions" },
        { href: "/placement", icon: "📍", text: "Designations" },
        { href: "/trainings", icon: "🎓", text: "Trainings" },
        { href: "/recruitmentPersonnel", icon: "👥", text: "Recruitment" },
        { href: "/history", icon: "⏳", text: "Archives" },
      ],
    },
  ];

  return (
    <nav className="top-navbar">
      <div className="navbar-brand">
        <div className="brand-content">
          <img src={logo} alt="BFP Logo" />
          <span className="brand-title">Villanueva Fire Station Admin</span>
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
        <a href="/admin" className={`nav-item ${isTabActive("/admin") ? "active" : ""}`}>
          <span className="nav-icon">🖥️</span> <span className="nav-text">Dashboard</span>
        </a>


        {dropdownSections.map((section) => (
          <div key={section.id} className={`nav-dropdown ${openDropdown === section.id ? 'dropdown-open' : ''}`}>
            <button className="nav-dropdown-toggle" onClick={() => toggleDropdown(section.id)}>
              <span className="nav-icon">{section.icon}</span> <span className="nav-text">{section.title}</span> <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`nav-dropdown-menu ${section.id}-menu`}>
              {section.items.map((item, idx) => (
                <a key={idx} href={item.href} className={`dropdown-item ${isTabActive(item.href) ? "active" : ""}`}>
                  <span className="dropdown-icon">{item.icon}</span> {item.text}
                </a>
              ))}
            </div>
          </div>
        ))}

        <a href="/logout" className="nav-item logout-btn">
          <span className="nav-icon">🚪</span> <span className="nav-text">Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
