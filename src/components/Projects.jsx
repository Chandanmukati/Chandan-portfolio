import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Slow Learner Identification System',
    desc: 'A MERN-based platform to identify slow learners by analyzing student performance patterns. Features JWT authentication, teacher/admin dashboards, and MongoDB-backed real-time data tracking.',
    img: '/project1.png',
    badge: 'In Progress',
    tags: ['Full Stack', 'MERN'],
    categories: ['fullstack'],
    techChips: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    linkInfo: { type: 'wip', text: ' Nov \'25 – Present', icon: 'fas fa-code-branch' }
  },
  {
    id: 2,
    title: 'Event Management Website',
    desc: 'Users can browse, register, and book events with ease. Integrated MySQL improved data handling efficiency by 50%. Built an intuitive admin panel reducing manual work by 70%.',
    img: '/project2.png',
    badge: 'Featured',
    tags: ['Full Stack', 'PHP'],
    categories: ['fullstack'],
    techChips: ['HTML/CSS', 'PHP', 'MySQL'],
    linkInfo: { type: 'link', url: 'https://github.com/Chandanmukati/Event-Management-Website', icon: 'fab fa-github' }
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    desc: 'Smooth and fast one-on-one messaging with Socket.io. Features secure user authentication, private conversations, and a responsive design that works flawlessly on mobile and desktop.',
    img: '/project3.png',
    badge: 'Featured',
    tags: ['Full Stack', 'Real-time'],
    categories: ['fullstack', 'backend'],
    techChips: ['React JS', 'Node JS', 'Socket.io'],
    linkInfo: { type: 'link', url: 'https://github.com/Chandanmukati/Real-Time-Chat-App', icon: 'fab fa-github' }
  }
];

function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(proj => 
    filter === 'all' || proj.categories.includes(filter)
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container animate-on-scroll">
          <div className="skills-header">
              <h2 className="skills-big-title">Featured <span className="gradient-text">Projects</span></h2>
              <p className="skills-subtitle">A showcase of my work spanning web applications, APIs, and responsive interfaces.</p>
          </div>

          {/* Project Filter Tabs */}
          <div className="skills-filter" id="projectFilter">
              <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
              <button className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} onClick={() => setFilter('fullstack')}>Full Stack</button>
              <button className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
              <button className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} onClick={() => setFilter('backend')}>Backend</button>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-card-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="proj-card" data-category={proj.categories.join(' ')}>
                  <div className="proj-card-img-wrap">
                      <img src={proj.img} alt={proj.title} className="proj-card-img" />
                      <span className="proj-featured-badge">{proj.badge}</span>
                      <div className="proj-img-tags">
                          {proj.tags.map((tag, idx) => (
                              <span key={idx}>{tag}</span>
                          ))}
                      </div>
                  </div>
                  <div className="proj-card-body">
                      <h3 className="proj-card-title">{proj.title}</h3>
                      <p className="proj-card-desc">{proj.desc}</p>
                      <div className="proj-card-footer">
                          <ul className="proj-tech-chips">
                              {proj.techChips.map((tech, idx) => (
                                  <li key={idx}>{tech}</li>
                              ))}
                          </ul>
                          <div className="proj-card-links">
                              {proj.linkInfo.type === 'wip' ? (
                                  <span className="proj-wip"><i className={proj.linkInfo.icon}></i>{proj.linkInfo.text}</span>
                              ) : (
                                  <a href={proj.linkInfo.url} target="_blank" rel="noreferrer" className="proj-link-btn"><i className={proj.linkInfo.icon}></i></a>
                              )}
                          </div>
                      </div>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Projects;
