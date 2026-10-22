
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-tag">
            HELLO, I'M <span className="tag-line"></span>
          </p>

          <h1>Keerthana P</h1>

          <h2 className="hero-role">
            Creative Developer.
          </h2>

          <p className="hero-description">
            A Computer Science Engineering student passionate
            about web development, creative design, and building
            digital experiences that make a difference.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate('/about')}>
              Discover My Story →
            </button>

            <button
              className="outline-btn"
              onClick={() => navigate('/education')}
            >
              My Education
            </button>
          </div>

          <div className="availability">
            <span className="status-dot"></span>
            Open to learning and opportunities
          </div>

          <div className="hero-features">
            <div className="feature-item">
              
            </div>

            

            
          </div>
        </div>

        <div className="hero-visual">
          <div className="background-circle"></div>
          <div className="outline-circle"></div>
          <div className="dot-pattern dot-top"></div>
          <div className="dot-pattern dot-bottom"></div>
          <div className="small-circle"></div>

          <div className="profile-container">
            <img
              src="/profile.png"
              alt="Keerthana"
              className="profile-photo"
            />
          </div>

        </div>
      </section>

      <section className="featured">
        <div className="section-heading">
          <p className="tag">WHAT I DO</p>
          <h2>
            Turning ideas into <span>reality.</span>
          </h2>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <p className="project-number">PROJECT / 01</p>
            <h3>Dictify</h3>
            <p>
              A smart dictionary and vocabulary learning
              platform designed to make learning words easier.
            </p>
            <span className="project-tech">
              Java · React · MongoDB
            </span>
          </div>

          <div className="project-card">
            <p className="project-number">PROJECT / 02</p>
            <h3>Medicom</h3>
            <p>
              A digital healthcare platform that brings
              appointments, patient services, and health tools
              into one place.
            </p>
            <span className="project-tech">
              Next.js · Supabase
            </span>
          </div>

          <div className="project-card">
            <p className="project-number">PROJECT / 03</p>
            <h3>QuizBlitz</h3>
            <p>
              An interactive quiz platform for practicing
              technical subjects and tracking quiz performance.
            </p>
            <span className="project-tech">
              Java · Spring Boot
            </span>
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="tag">LET'S KEEP GROWING</p>
        <h2>
          Curiosity today. <span>Innovation tomorrow.</span>
        </h2>
        <button onClick={() => navigate('/about')}>
          More About Me →
        </button>
      </section>
    </div>
  );
}

export default Home;
