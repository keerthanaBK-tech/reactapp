import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      number: '01',
      name: 'Dictify',
      description:
        'A smart dictionary and vocabulary learning platform designed to make learning words easier.',
      technologies: 'Java · React · MongoDB'
    },
    {
      number: '02',
      name: 'Medicom',
      description:
        'A digital healthcare platform that brings appointments, patient services, and health tools into one place.',
      technologies: 'Next.js · Supabase'
    },
    {
      number: '03',
      name: 'QuizBlitz',
      description:
        'An interactive quiz platform for practicing technical subjects and tracking quiz performance.',
      technologies: 'Java · Spring Boot'
    }
  ];

  return (
    <section className="page projects-page">
      <div className="page-heading">
        <p className="tag">MY WORK</p>
        <h1>Projects & <span>Creations.</span></h1>
        <p>
          A collection of projects that reflect my learning,
          creativity, and interest in software development.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <p className="project-number">
              PROJECT / {project.number}
            </p>

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <span className="project-tech">
              {project.technologies}
            </span>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <h2>Every project is a new opportunity to learn.</h2>
        <button onClick={() => navigate('/about')}>
          More About Me →
        </button>
      </div>
    </section>
  );
}

export default Projects;