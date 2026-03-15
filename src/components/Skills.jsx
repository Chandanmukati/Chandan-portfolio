import React, { useState, useEffect, useRef } from 'react';

// Skill data array for easier rendering
const skillsData = [
  { id: 1, name: 'C++', percent: 80, icon: 'fas fa-file-code', category: 'language', tag: 'Programming Languages' },
  { id: 2, name: 'Java', percent: 75, icon: 'fab fa-java', category: 'language', tag: 'Programming Languages' },
  { id: 3, name: 'JavaScript', percent: 75, icon: 'fab fa-js', category: 'language', tag: 'Programming Languages' },
  { id: 4, name: 'PHP', percent: 70, icon: 'fab fa-php', category: 'language', tag: 'Programming Languages' },
  { id: 5, name: 'HTML5', percent: 95, icon: 'fab fa-html5', category: 'frontend', tag: 'Frontend' },
  { id: 6, name: 'CSS3', percent: 90, icon: 'fab fa-css3-alt', category: 'frontend', tag: 'Frontend' },
  { id: 7, name: 'React.js', percent: 80, icon: 'fab fa-react', category: 'frontend', tag: 'Frontend' },
  { id: 8, name: 'Bootstrap', percent: 85, icon: 'fab fa-bootstrap', category: 'frontend', tag: 'Frontend' },
  { id: 9, name: 'Node.js', percent: 70, icon: 'fab fa-node-js', category: 'backend', tag: 'Backend' },
  { id: 10, name: 'MySQL', percent: 80, icon: 'fas fa-database', category: 'database', tag: 'Databases' },
  { id: 11, name: 'MongoDB', percent: 70, icon: 'fas fa-leaf', category: 'database', tag: 'Databases' },
  { id: 12, name: 'Figma', percent: 75, icon: 'fab fa-figma', category: 'tools', tag: 'Tools' },
  { id: 13, name: 'GitHub', percent: 75, icon: 'fab fa-github', category: 'tools', tag: 'Tools' },
  { id: 14, name: 'VS Code', percent: 95, icon: 'fas fa-code', category: 'tools', tag: 'Tools' }
];

function Skills() {
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    // Skill Progress Bar Animation on Scroll
    if (!containerRef.current) return;
    
    const progressFills = containerRef.current.querySelectorAll('.skill-progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = fill.dataset.target;
                fill.style.width = '0'; // reset
                // Small delay before animating for a polished feel
                setTimeout(() => {
                    fill.style.width = targetWidth;
                }, 100);
                progressObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    progressFills.forEach(bar => {
        // Prepare for animation
        bar.style.width = '0';
        progressObserver.observe(bar);
    });

    return () => {
        progressFills.forEach(bar => progressObserver.unobserve(bar));
    };
  }, []); // Only run once on mount

  const filteredSkills = skillsData.filter(skill => filter === 'all' || skill.category === filter);

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <div className="container animate-on-scroll">
        <div className="skills-header">
            <h2 className="skills-big-title">Technical <span className="gradient-text">Arsenal</span></h2>
            <p className="skills-subtitle">A showcase of technologies I've mastered on my journey as a developer.</p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter" id="skillsFilter">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Skills</button>
            <button className={`filter-btn ${filter === 'language' ? 'active' : ''}`} onClick={() => setFilter('language')}>Programming Languages</button>
            <button className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
            <button className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} onClick={() => setFilter('backend')}>Backend</button>
            <button className={`filter-btn ${filter === 'database' ? 'active' : ''}`} onClick={() => setFilter('database')}>Databases</button>
            <button className={`filter-btn ${filter === 'tools' ? 'active' : ''}`} onClick={() => setFilter('tools')}>Tools</button>
        </div>

        {/* Skill Cards Grid */}
        <div className="skills-advanced-grid" id="skillGrid">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="skill-adv-card" data-category={skill.category}>
                <div className="skill-adv-top">
                    <div className="skill-adv-icon"><i className={skill.icon}></i></div>
                    <span className="skill-adv-name">{skill.name}</span>
                    <span className="skill-adv-percent">{skill.percent}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" style={{ width: `${skill.percent}%` }} data-target={`${skill.percent}%`}></div>
                </div>
                <span className="skill-category-tag">{skill.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
