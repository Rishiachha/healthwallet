import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import "../App.css";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/register", { name, email, password });
      navigate("/login");
    } catch {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="register-left-content">
          <div className="register-logo">💚</div>

          <h1>Start Your Health Journey Today</h1>
          <p>
            Join thousands of users who trust HealthWallet with their medical
            records.
          </p>

          <ul>
            <li>Secure cloud storage for all medical records</li>
            <li>Track vitals and health trends over time</li>
            <li>Share reports securely with doctors and family</li>
            <li>Access your health data anywhere, anytime</li>
          </ul>
        </div>
      </div>

      <div className="register-right">
        <div className="register-form">
          <div className="brand">💚 <span>HealthWallet</span></div>

          <h2>Create account</h2>
          <p className="subtitle">
            Get started with your free HealthWallet account
          </p>

          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <small>Must be at least 8 characters</small>

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account →"}
            </button>
          </form>

          <p className="switch-auth">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

          <p className="terms">
            By creating an account, you agree to our{" "}
            <span>Terms of Service</span> and <span>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
