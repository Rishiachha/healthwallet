import { Link } from "react-router-dom";
import "../App.css";

const Index = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="logo">💚 HealthWallet</div>
        <nav>
          <Link to="/login">Sign In</Link>
          <Link to="/register" className="primary-btn">Get Started</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            All Your Health Records <br />
            <span>In One Place</span>
          </h1>
          <p>
            Access your medical reports anytime, track vitals, and
            securely share with doctors.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-btn">
              Get Started Free →
            </Link>
            <Link to="/login" className="secondary-btn">
              Sign In
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="wave-card">
            <p>Secure • Simple • Smart</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Everything You Need</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Easy Upload</h3>
            <p>Upload PDFs and images of medical reports.</p>
          </div>

          <div className="feature-card">
            <h3>Track Vitals</h3>
            <p>Monitor BP, sugar levels, heart rate.</p>
          </div>

          <div className="feature-card">
            <h3>Smart Search</h3>
            <p>Find reports instantly.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Sharing</h3>
            <p>Share reports with doctors securely.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Take Control?</h2>
        <p>Join thousands of users managing health digitally.</p>
        <Link to="/register" className="primary-btn">
          Create Free Account →
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2024 HealthWallet. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
