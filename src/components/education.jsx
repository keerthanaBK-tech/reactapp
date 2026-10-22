
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();

  return (
    <section className="page education-page">
      <div className="page-heading">
        <p className="tag">MY LEARNING JOURNEY</p>
        <h1>Building my <span>foundation.</span></h1>
        <p>
          Every new skill is another step towards becoming
          the developer I want to be.
        </p>
      </div>

      <div className="section-heading">
        <p className="tag">01 / ACADEMICS</p>
        <h2>My <span>Education.</span></h2>
      </div>

      <div className="education-grid">
        <div className="education-card">
          <p className="card-label">UNDERGRADUATE</p>
          <h3>B.E. Computer Science and Engineering</h3>
          <h4>SA Engineering College</h4>
          <p>
            Developing a foundation in programming,
            software engineering, databases, and computer
            science fundamentals.
          </p>
          <span className="status-label">Currently Pursuing</span>
        </div>

        <div className="education-card">
          <p className="card-label">HIGHER SECONDARY</p>
          <h3>Higher Secondary Education</h3>
          <h4>Sacred Heart Girls Hr Sec School</h4>
          <p>
            Built the academic foundation needed for
            engineering studies and analytical thinking.
          </p>
          <span className="status-label">Completed</span>
        </div>

        <div className="education-card">
          <p className="card-label">SECONDARY</p>
          <h3>Secondary Education</h3>
          <h4>Sacred Heart Girls Hr Sec School</h4>
          <p>
            Developed essential learning habits and
            foundational academic knowledge.
          </p>
          <span className="status-label">Completed</span>
        </div>
      </div>

      <div className="section-heading">
        <p className="tag">02 / PROFESSIONAL LEARNING</p>
        <h2>Certifications & <span>courses.</span></h2>
      </div>

      <div className="cert-grid">
        <div className="cert-card">
          <span className="cert-icon">01</span>
          <h3>AWS Academy</h3>
          <p>Cloud Foundations</p>
        </div>

        <div className="cert-card">
          <span className="cert-icon">02</span>
          <h3>Infosys Springboard</h3>
          <p>Front End Web Developer</p>
        </div>

        <div className="cert-card">
          <span className="cert-icon">03</span>
          <h3>NPTEL</h3>
          <p>Programming in Java and DBMS</p>
        </div>

        <div className="cert-card">
          <span className="cert-icon">04</span>
          <h3>Cisco Networking Academy</h3>
          <p>Introduction to Cyber Security</p>
        </div>
      </div>

      <div className="learning-panel">
        <p className="tag">03 / WHAT'S NEXT?</p>
        <h2>
          Always a student. <span>Always improving.</span>
        </h2>

        <div className="learning-tags">
          <span>Advanced React</span>
          <span>Full Stack Development</span>
          <span>Data Structures</span>
          <span>UI/UX Design</span>
          <span>Problem Solving</span>
        </div>

        <p>
          My next goal is to strengthen my development skills,
          build more real-world projects, and prepare for a
          rewarding career in software development.
        </p>
      </div>

      <button onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </section>
  );
}

export default Education;
