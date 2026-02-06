import { useState } from "react";
import "./App.css";

// 🔥 CLEANER FUNCTION (CORE FIX)
const cleanCoverLetter = (text) => {
  if (!text) return "";

  return text
    .split("\n")
    .filter((line) => {
      const l = line.toLowerCase().trim();

      // ❌ remove placeholder / address / department blocks
      if (l.startsWith("[") && l.endsWith("]")) return false;
      if (l.includes("address")) return false;
      if (l.includes("recruitment")) return false;
      if (l === "hiring team") return false;

      return true;
    })
    .join("\n")
    // ❌ remove markdown bold **
    .replace(/\*\*/g, "")
    // ❌ remove extra empty lines
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};


export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    jobRole: "",
    companyName: "",
    skills: "",
    experience: "Fresher",
  });

  const [resume, setResume] = useState(null);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append("resume", resume);

    try {
      const res = await fetch("https://ai-cover-letter-generator-backend.onrender.com/generate-cover-letter", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      // 🔥 CLEAN OUTPUT BEFORE SHOWING
      setOutput(cleanCoverLetter(result.coverLetter));
    } catch (err) {
      alert("Error generating cover letter");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>AI Cover Letter Generator</header>

      <div className="layout">
        {/* LEFT FORM */}
        <form className="card" onSubmit={handleSubmit}>
          <h3>Candidate Details</h3>

          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />

          <h3>Job Details</h3>

          <input name="jobRole" placeholder="Job Role" onChange={handleChange} required />
          <input name="companyName" placeholder="Company Name" onChange={handleChange} required />

          <select name="experience" onChange={handleChange}>
            <option>Fresher</option>
            <option>Experienced</option>
          </select>

          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            rows="3"
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <button type="submit">
            {loading ? "Generating..." : "Generate Cover Letter"}
          </button>
        </form>

        {/* RIGHT PREVIEW */}
        <div className="preview card">
          <h3>Generated Cover Letter</h3>
          <div className="output">
            {output || "Your generated cover letter will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}
