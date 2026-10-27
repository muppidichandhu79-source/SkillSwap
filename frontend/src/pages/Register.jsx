
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage(
      "Registration form is working! Backend connection is the next step."
    );
  }

  return (
    <div className="login-page">
      <header className="login-navbar">
        <Link to="/" className="login-logo">
          Skill<span>Swap</span>.
        </Link>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </header>

      <main className="login-main">
        <section className="login-card">
          <div className="login-icon">S</div>

          <p className="login-eyebrow">JOIN THE COMMUNITY</p>

          <h1>Create your account</h1>

          <p className="login-subtitle">
            Join SkillSwap to share your knowledge and learn new skills.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="register-name">Full name</label>
              <input
                id="register-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setMessage("");
                }}
                autoComplete="name"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="register-email">Email address</label>
              <input
                id="register-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                autoComplete="email"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage("");
                }}
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setMessage("");
                }}
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>

            <button type="submit" className="signin-button">
              Create Account <span aria-hidden="true">→</span>
            </button>
          </form>

          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}

          <p className="register-prompt" style={{ marginTop: "24px" }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

          <p className="login-footer">
            Learn something new. Share what you know.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Register;