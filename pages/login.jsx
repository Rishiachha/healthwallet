import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT SIDE (FORM) */}
      <div className="login-left">
        <div className="login-form">
          <div className="brand">
            💚 <span>HealthWallet</span>
          </div>

          <h2>Welcome back</h2>
          <p className="subtitle">
            Sign in to access your health records
          </p>

          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-row">
              <label>Password</label>
              <span className="forgot">Forgot password?</span>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          <p className="switch-auth">
            Don&apos;t have an account? <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (GREEN PANEL) */}
      <div className="login-right">
        <div className="login-right-content">
          <div className="login-logo">💚</div>

          <h1>Your Health Journey Starts Here</h1>
          <p>
            Access all your medical records, track your vitals, and share
            securely with healthcare providers.
          </p>
        </div>
      </div>
    </div>
  );
}
