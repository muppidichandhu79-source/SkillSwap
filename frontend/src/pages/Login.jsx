
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage(
      "Login form is working! Backend authentication is not connected yet."
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

          <p className="login-eyebrow">WELCOME TO SKILLSWAP</p>

          <h1>Welcome back!</h1>

          <p className="login-subtitle">
            Sign in to connect, learn, and share your skills.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
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
              <div className="password-heading">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage("");
                }}
                autoComplete="current-password"
                required
              />
            </div>

            <button type="submit" className="signin-button">
              Sign In <span aria-hidden="true">→</span>
            </button>
          </form>

          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}

          <div className="login-divider">
            <span>YOUR SKILLS. YOUR COMMUNITY.</span>
          </div>

          <p className="register-prompt">
            New to SkillSwap?{" "}
            <Link to="/register">Create an account</Link>
          </p>

          <p className="login-footer">
            Learn something new. Share what you know.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Login;