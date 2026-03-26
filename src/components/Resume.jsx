import React, { useState } from 'react';

function Resume() {
  const [activeTab, setActiveTab] = useState('resume-education');

  return (
    <section id="resume" className="resume-section">
      <div className="container animate-on-scroll">
          <div className="skills-header">
              <h2 className="skills-big-title">My <span className="gradient-text">Resume</span></h2>
          </div>

          {/* Resume Filter Tabs */}
          <div className="skills-filter" id="resumeFilter">
              <button 
                  className={`filter-btn ${activeTab === 'resume-education' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('resume-education')}
              >
                  Education
              </button>
              <button 
                  className={`filter-btn ${activeTab === 'resume-experience' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('resume-experience')}
              >
                  Experience / Training
              </button>
          </div>

          <div className="resume-content-area">
              {/* Education List */}
              <div className={`resume-list ${activeTab === 'resume-education' ? 'active' : 'hidden'}`} id="resume-education">
                  
                  {/* Card 1 */}
                  <div className="resume-card glass-panel">
                      <div className="resume-card-header">
                          <div className="resume-title-group">
                              <h3 className="resume-inst">Lovely Professional University</h3>
                              <p className="resume-loc">Phagwara, Punjab</p>
                          </div>
                          <span className="resume-date-badge">Since Aug 2023</span>
                      </div>
                      <div className="resume-card-body">
                          <h4 className="resume-degree">Bachelor of Technology - Computer Science and Engineering</h4>
                          <p className="resume-score">CGPA: 6.66</p>
                      </div>
                  </div>

                  {/* Card 2 */}
                  <div className="resume-card glass-panel">
                      <div className="resume-card-header">
                          <div className="resume-title-group">
                              <h3 className="resume-inst">Shri Gujarati Samaj AMNEM School</h3>
                              <p className="resume-loc">Indore, MP</p>
                          </div>
                          <span className="resume-date-badge">Jul 2021 - Mar 2022</span>
                      </div>
                      <div className="resume-card-body">
                          <h4 className="resume-degree">Intermediate (PCM)</h4>
                          <p className="resume-score">Percentage: 62%</p>
                      </div>
                  </div>

                  {/* Card 3 */}
                  <div className="resume-card glass-panel">
                      <div className="resume-card-header">
                          <div className="resume-title-group">
                              <h3 className="resume-inst">Shri Gujarati Samaj AMNEM School</h3>
                              <p className="resume-loc">Indore, MP</p>
                          </div>
                          <span className="resume-date-badge">Jul 2019 - Mar 2020</span>
                      </div>
                      <div className="resume-card-body">
                          <h4 className="resume-degree">Matriculation</h4>
                          <p className="resume-score">Percentage: 68%</p>
                      </div>
                  </div>
              </div>

              {/* Experience List */}
              <div className={`resume-list ${activeTab === 'resume-experience' ? 'active' : 'hidden'}`} id="resume-experience">
                  <div className="resume-card glass-panel">
                      <div className="resume-card-header">
                          <div className="resume-title-group">
                              <h3 className="resume-inst">Board Infinity</h3>
                              <p className="resume-loc">Remote</p>
                          </div>
                          <span className="resume-date-badge">Jun 2025 - Jul 2025</span>
                      </div>
                      <div className="resume-card-body">
                          <h4 className="resume-degree">Data Structure and Algorithms Training</h4>
                          <p className="resume-desc">Completed a 6-week intensive C++ and DSA training program. Created a Library Management System using C++.</p>
                      </div>
                  </div>
              </div>

          </div>

          <div className="resume-download-wrap">
              <a href="./chandan_cv.pdf?v=2" download="Chandan_Mukati_Resume.pdf" className="btn-download"><i className="fas fa-file-alt"></i> Download Resume</a>
          </div>
      </div>
  </section>
  );
}

export default Resume;
