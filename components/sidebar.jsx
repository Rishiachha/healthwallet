import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div
      style={{
        width: "240px",
        background: "#ffffff",
        height: "100vh",
        borderRight: "1px solid #e5e7eb",
        padding: "18px"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>HealthWallet</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link
          to="/dashboard"
          style={{
            padding: "10px",
            borderRadius: "8px",
            textDecoration: "none",
            color: location.pathname === "/dashboard" ? "#0ea5e9" : "#111"
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/reports"
          style={{
            padding: "10px",
            borderRadius: "8px",
            textDecoration: "none",
            color: location.pathname === "/reports" ? "#0ea5e9" : "#111"
          }}
        >
          Reports
        </Link>

        <Link
          to="/vitals"
          style={{
            padding: "10px",
            borderRadius: "8px",
            textDecoration: "none",
            color: location.pathname === "/vitals" ? "#0ea5e9" : "#111"
          }}
        >
          Vitals
        </Link>

        <Link
          to="/sharing"
          style={{
            padding: "10px",
            borderRadius: "8px",
            textDecoration: "none",
            color: location.pathname === "/sharing" ? "#0ea5e9" : "#111"
          }}
        >
          Sharing
        </Link>

        <Link
          to="/settings"
          style={{
            padding: "10px",
            borderRadius: "8px",
            textDecoration: "none",
            color: location.pathname === "/settings" ? "#0ea5e9" : "#111"
          }}
        >
          Settings
        </Link>
      </nav>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        style={{
          marginTop: "30px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          background: "#ef4444",
          color: "white",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Logout
      </button>
    </div>
  );
}
