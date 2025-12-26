import { Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/index.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Reports from "./pages/reports.jsx";
import Vitals from "./pages/vitals.jsx";
import Sharing from "./pages/sharing.jsx";
import Settings from "./pages/settings.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        }
      />

      <Route
        path="/vitals"
        element={
          <PrivateRoute>
            <Vitals />
          </PrivateRoute>
        }
      />

      <Route
        path="/sharing"
        element={
          <PrivateRoute>
            <Sharing />
          </PrivateRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
