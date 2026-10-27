
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Profile() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [teachSkills, setTeachSkills] = useState("");
  const [learnSkills, setLearnSkills] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
   const savedProfile = localStorage.getItem("skillswapProfile");

   if (savedProfile) {
    const profile = JSON.parse(savedProfile);

    setName(profile.name || "");
    setCollege(profile.college || "");
    setDepartment(profile.department || "");
    setTeachSkills((profile.teachSkills || []).join(", "));
    setLearnSkills((profile.learnSkills || []).join(", "));
    setBio(profile.bio || "");
   }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const profile = {
      name,
      college,
      department,
      teachSkills: teachSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      learnSkills: learnSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      bio,
    };

    localStorage.setItem("skillswapProfile", JSON.stringify(profile));
    setMessage("Your profile has been saved on this device!");
  }

  return (
    <div className="login-page">
      
     <header className="login-navbar profile-navbar">
        <Link to="/" className="login-logo">
         Skill<span>Swap</span>.
        </Link>

<nav className="profile-nav-links">
  <Link to="/">Home</Link>
  <Link to="/explore">Explore Skills</Link>
  <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
  <Link to="/profile" className="active">Profile</Link>
  <Link to="/login" className="logout-btn">Logout</Link>
</nav>

      </header>

      <main className="login-main">
        <section className="login-card profile-card">
          <div className="login-icon">S</div>

          <p className="login-eyebrow">YOUR SKILLS, YOUR FUTURE</p>

          <h1>Create your profile</h1>

          <p className="login-subtitle">
            Tell other students about yourself and exchange skills.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="profile-name">Full name</label>
              <input
                id="profile-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setMessage("");
                }}
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="profile-college">College name</label>
              <input
                id="profile-college"
                type="text"
                placeholder="Enter your college"
                value={college}
                onChange={(event) => {
                  setCollege(event.target.value);
                  setMessage("");
                }}
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="profile-department">Department / Course</label>
              <input
                id="profile-department"
                type="text"
                placeholder="e.g. Computer Science"
                value={department}
                onChange={(event) => {
                  setDepartment(event.target.value);
                  setMessage("");
                }}
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="teach-skills">
                Skills I can teach
              </label>
              <input
                id="teach-skills"
                type="text"
                placeholder="e.g. Python, Java, Web Design"
                value={teachSkills}
                onChange={(event) => {
                  setTeachSkills(event.target.value);
                  setMessage("");
                }}
                required
              />
              <small className="profile-hint">
                Separate multiple skills with commas.
              </small>
            </div>

            <div className="login-field">
              <label htmlFor="learn-skills">
                Skills I want to learn
              </label>
              <input
                id="learn-skills"
                type="text"
                placeholder="e.g. React, UI/UX, Machine Learning"
                value={learnSkills}
                onChange={(event) => {
                  setLearnSkills(event.target.value);
                  setMessage("");
                }}
                required
              />
              <small className="profile-hint">
                Separate multiple skills with commas.
              </small>
            </div>

            <div className="login-field">
              <label htmlFor="profile-bio">About me</label>
              <textarea
                id="profile-bio"
                className="profile-textarea"
                placeholder="Tell other students a little about yourself..."
                value={bio}
                onChange={(event) => {
                  setBio(event.target.value);
                  setMessage("");
                }}
                rows={4}
                maxLength={300}
              />
            </div>

            <button type="submit" className="signin-button">
              Save Profile <span aria-hidden="true">→</span>
            </button>
          </form>

          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}

          <p className="login-footer">
  Share your knowledge. Learn together.
</p>

{/* My Profile Summary */}
<div className="profile-summary">
  <div className="profile-summary-header">
    <h2>My Profile Summary</h2>
    <button
  type="button"
  className="edit-profile-btn"
  onClick={() => {
    document
      .getElementById("profile-name")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("profile-name")?.focus();
  }}
>
  Edit Profile ✎
</button>
  </div>

  <h3>{name || "Your Name"}</h3>
  <p><strong>College:</strong> {college || "Not added yet"}</p>
  <p><strong>Department:</strong> {department || "Not added yet"}</p>

  <div className="summary-group">
    <strong>Skills I can teach</strong>
    <div className="summary-skills">
      {teachSkills
        ? teachSkills.split(",").map((skill, index) => (
            <span key={index}>{skill.trim()}</span>
          ))
        : <span>Not added yet</span>}
    </div>
  </div>

  <div className="summary-group">
    <strong>Skills I want to learn</strong>
    <div className="summary-skills">
      {learnSkills
        ? learnSkills.split(",").map((skill, index) => (
            <span key={index}>{skill.trim()}</span>
          ))
        : <span>Not added yet</span>}
    </div>
  </div>

  <div className="summary-group">
    <strong>About me</strong>
    <p>{bio || "No bio added yet."}</p>
  </div>
</div>
        </section>
      </main>
    </div>
  );
}

export default Profile;