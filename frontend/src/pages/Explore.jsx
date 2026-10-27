
import { useState } from "react";
import "../App.css";

const skills = [
  { id: 1, name: "Web Development", category: "Technology", icon: "💻", level: "Beginner", credits: 10, description: "Learn to build modern websites using HTML, CSS and React." },
  { id: 2, name: "Graphic Design", category: "Design", icon: "🎨", level: "Beginner", credits: 8, description: "Explore creative design, layouts, typography and colors." },
  { id: 3, name: "Python Programming", category: "Technology", icon: "🐍", level: "Intermediate", credits: 12, description: "Practice Python fundamentals, problem-solving and projects." },
  { id: 4, name: "Photography", category: "Creative", icon: "📸", level: "Beginner", credits: 8, description: "Understand composition, lighting and camera basics." },
  { id: 5, name: "Public Speaking", category: "Communication", icon: "🎤", level: "All levels", credits: 7, description: "Improve confidence, presentation and communication." },
  { id: 6, name: "Video Editing", category: "Creative", icon: "🎬", level: "Intermediate", credits: 10, description: "Learn editing techniques, transitions and storytelling." },
  { id: 7, name: "Java Programming", category: "Technology", icon: "☕", level: "Beginner", credits: 10, description: "Understand Java syntax and object-oriented programming." },
  { id: 8, name: "UI/UX Design", category: "Design", icon: "🖌️", level: "Beginner", credits: 9, description: "Design intuitive interfaces and user experiences." },
  { id: 9, name: "Communication Skills", category: "Communication", icon: "💬", level: "All levels", credits: 7, description: "Build better conversations, teamwork and listening skills." },
];

function Explore() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = ["All", "Technology", "Design", "Creative", "Communication"];

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(search.toLowerCase()) ||
      skill.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || skill.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="explore-page">
      
<header className="explore-header">
  <a className="logo" href="/">Skill<span>Swap</span>.</a>

  <nav className="profile-nav-links">
    <a href="/">Home</a>
    <a href="/explore" className="active">Explore Skills</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <a href="/profile">Profile</a>
    <a href="/login" className="logout-btn">Logout</a>
  </nav>
</header>

      <section className="explore-hero">
        <span className="eyebrow">YOUR LEARNING JOURNEY STARTS HERE</span>
        <h1>Discover your next <span>skill.</span></h1>
        <p>
          Learn from fellow students, share what you know, and grow your
          skills together.
        </p>

        <div className="explore-search">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search skills, topics or interests..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </section>

      <main className="explore-content">
        <div className="explore-title-row">
          <div>
            <h2>Explore skills</h2>
            <p>Find something new to learn today.</p>
          </div>
          <span className="skill-count">{filteredSkills.length} skills found</span>
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={`category-filter ${category === item ? "active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <article className="skill-card explore-card" key={skill.id}>
              <div className="explore-card-top">
                <div className="skill-icon">{skill.icon}</div>
                <span className="explore-level">{skill.level}</span>
              </div>

              <span className="category">{skill.category}</span>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>

              <div className="explore-card-bottom">
                <span>✦ {skill.credits} credits / session</span>
                <button
  type="button"
  onClick={() => {
    setSelectedSkill(skill);

    setTimeout(() => {
      document
        .getElementById("skill-details")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }}
>
  View Skill Details ↗
</button>
              </div>
            </article>
          ))}
        </div>
        
{selectedSkill && (
  <section className="skill-details-panel" id="skill-details">
    <button
      className="close-details-btn"
      onClick={() => setSelectedSkill(null)}
    >
      ✕ Close
    </button>

    <div className="skill-icon">{selectedSkill.icon}</div>
    <span className="category">{selectedSkill.category}</span>

    <h2>{selectedSkill.name}</h2>
    <p>{selectedSkill.description}</p>

    <p><strong>Level:</strong> {selectedSkill.level}</p>
    <p><strong>Credits:</strong> {selectedSkill.credits} per session</p>

    <button
      className="primary-btn"
      onClick={() => {
        window.location.href = "/login";
      }}
    >
      Login to Connect ↗
    </button>
  </section>
)}


        {filteredSkills.length === 0 && (
          <div className="explore-empty">
            <span>🔎</span>
            <h3>No skills found</h3>
            <p>Try a different search or choose another category.</p>
            <button
              className="primary-btn"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer>
        <a className="logo" href="/">Skill<span>Swap</span>.</a>
        <p>Learn together. Grow together. © 2026 SkillSwap</p>
      </footer>
    </div>
  );
}

export default Explore;
