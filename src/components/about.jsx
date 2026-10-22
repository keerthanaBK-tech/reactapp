import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <section className="page about-page">
      <div className="page-heading">
        <p className="tag">A LITTLE ABOUT ME</p>
        <h1>Behind the <span>code.</span></h1>
        <p>
          More than a developer in progress — a curious mind
          that loves to learn, create, and improve.
        </p>
      </div>

      <div className="about-grid">
        <div className="content-card about-intro">
          <p className="card-label">01 / MY STORY</p>
          <h2>Learning. Building. Becoming.</h2>

          <p>
            I am Keerthana, a Computer Science and Engineering
            student with a strong interest in software development
            and frontend design.
          </p>

          <p>
            I enjoy transforming ideas into functional websites,
            exploring modern technologies, and improving my
            problem-solving skills through practical projects.
          </p>

          <p>
            My goal is to become a skilled software developer
            who builds useful, accessible, and user-friendly
            applications.
          </p>
        </div>

        <div className="content-card objective-card">
          <p className="card-label">02 / MY GOAL</p>
          <div className="big-icon">↗</div>
          <h2>Career Objective</h2>

          <p>
            To begin my career in a growth-oriented organization
            where I can contribute my technical knowledge,
            collaborate with a team, and continuously learn
            new technologies.
          </p>
        </div>
      </div>

      <div className="section-heading">
        <p className="tag">03 / TECH STACK</p>
        <h2>Tools I work <span>with.</span></h2>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <span>01</span>
          <h3>Programming</h3>
          <p>Java, Python, C, JavaScript</p>
        </div>

        <div className="skill-card">
          <span>02</span>
          <h3>Frontend</h3>
          <p>HTML5, CSS3, React.js, Tailwind CSS</p>
        </div>

        <div className="skill-card">
          <span>03</span>
          <h3>Backend</h3>
          <p>Node.js, Express.js, Spring Boot</p>
        </div>

        <div className="skill-card">
          <span>04</span>
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>

        <div className="skill-card">
          <span>05</span>
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Figma</p>
        </div>

        <div className="skill-card">
          <span>06</span>
          <h3>Core Subjects</h3>
          <p>OOP, DBMS, Computer Networks</p>
        </div>
      </div>

      <div className="about-bottom">
        <div>
          <p className="tag">04 / MY STRENGTHS</p>
          <h2>What makes me <span>different?</span></h2>
          <ul className="strength-list">
            <li>Quick learner who enjoys exploring new technologies</li>
            <li>Creative thinking and attention to detail</li>
            <li>Consistent learner with a problem-solving mindset</li>
            <li>Willingness to learn and collaborate with others</li>
          </ul>
        </div>

        <div className="interest-box">
          <p className="card-label">05 / BEYOND THE SCREEN</p>
          <h3>When I'm not coding</h3>
          <p>Listening to music, watching movies, exploring design,
            and discovering new things to learn.</p>
        </div>
      </div>

      <button onClick={() => navigate('/education')}>
        Explore My Education ↗
      </button>
    </section>
  );
}

export default About;