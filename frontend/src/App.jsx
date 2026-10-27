
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
function Home() {
  const [search, setSearch] = useState("");

  const skills = [
    { name: "Web Development", icon: "💻", category: "Technology", level: "Beginner friendly" },
    { name: "Graphic Design", icon: "🎨", category: "Design", level: "All levels" },
    { name: "Python Programming", icon: "🐍", category: "Technology", level: "Intermediate" },
    { name: "Photography", icon: "📸", category: "Creative", level: "Beginner friendly" },
    { name: "Public Speaking", icon: "🎤", category: "Communication", level: "All levels" },
    { name: "Video Editing", icon: "🎬", category: "Creative", level: "Intermediate" },
  ];

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <nav className="navbar">
        <Link className="logo" to="/">Skill<span>Swap</span>.</Link>

        
         <div className="nav-links">
           <Link to="/">Home</Link>
           <Link to="/explore">Explore Skills</Link>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
           <Link to="/profile">Profile</Link>
           <a href="#how">How It Works</a>
         </div>


        <Link className="login-btn" to="/register">Get Started ↗</Link>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">✦ LEARN TOGETHER. GROW TOGETHER.</div>

            <h1>Share a skill.<br />Learn <span>something new.</span></h1>

            <p>
              Connect with fellow students, exchange your skills, and grow
              together. Your next great learning experience starts here.
            </p>

            <div className="hero-actions">
              <Link className="primary-btn" to="/explore">Explore Skills ↗</Link>
              <a className="secondary-btn" href="#how">How it works</a>
            </div>

            <div className="trust">
              <span>🎓</span>
              <p>
                <strong>Built for students</strong><br />
                Learn from your college community
              </p>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle">
              <div className="art-icon icon-one">💻</div>
              <div className="art-icon icon-two">🎨</div>
              <div className="art-icon icon-three">📸</div>
              <div className="art-icon icon-four">🚀</div>

              <div className="center-art">
                <span>✦</span>
                <h2>Skills are<br />better shared.</h2>
                <p>Give a little. Gain a lot.</p>
              </div>
            </div>

            <div className="floating-note">
              🤝 Your next skill partner awaits!
            </div>
          </div>
        </section>

        <section className="skills-section" id="explore">
          <div className="section-heading">
            <div>
              <div className="eyebrow">DISCOVER YOUR NEXT SKILL</div>
              <h2>Explore what you can learn</h2>
              <p>
                Find a skill that inspires you and connect with someone who knows it.
              </p>
            </div>
            <span className="skill-count">{filteredSkills.length} skills</span>
          </div>

          <input
            className="search-box"
            type="search"
            placeholder="🔍 Search skills..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="category">{skill.category}</span>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
                <Link className="home-skill-link" to="/explore">
                  Learn this skill ↗
                </Link>
              </article>
            ))}

            {filteredSkills.length === 0 && (
              <p>No skills found. Try another search.</p>
            )}
          </div>
        </section>

        <section className="how-section" id="how">
          <div className="eyebrow">SIMPLE. SOCIAL. SMART.</div>
          <h2>How SkillSwap works</h2>

          <div className="steps">
            <article>
              <span>01</span>
              <h3>Create your profile</h3>
              <p>Share what you know and what you want to learn.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Find your match</h3>
              <p>Discover students with skills that match your goals.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Learn and exchange</h3>
              <p>Book sessions, share knowledge, and earn credits.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <Link className="logo" to="/">Skill<span>Swap</span>.</Link>
        <p>Built for students, powered by sharing. © 2026 SkillSwap</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
