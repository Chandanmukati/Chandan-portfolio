import React from 'react';

function About() {
  return (
    <section id="certifications" className="cert-section">
        <div className="container animate-on-scroll">
            <div className="skills-header">
                <h2 className="skills-big-title">My <span className="gradient-text">Certifications</span></h2>
                <p className="skills-subtitle">Professional credentials that validate my technical expertise and continuous learning journey.</p>
            </div>

            <div className="cert-grid">

                {/* Certificate 1: LPU C++ DSA */}
                <div className="cert-card">
                    <div className="cert-front">
                        <img src="/cert1.png" alt="C++ DSA Certificate" className="cert-img" />
                        <div className="cert-overlay"></div>
                        <div className="cert-issuer-badge">LPU</div>
                        <div className="cert-date-stamp">Jul 2025</div>
                    </div>
                    <div className="cert-back">
                        <div className="cert-back-content">
                            <h3 className="cert-back-title">Programming in C++: DSA</h3>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">🏛️</span>
                                <div>
                                    <span className="cert-row-label">Issued by:</span>
                                    <p className="cert-row-value">Lovely Professional University</p>
                                </div>
                            </div>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">📅</span>
                                <div>
                                    <span className="cert-row-label">Date:</span>
                                    <p className="cert-row-value">July 2025</p>
                                </div>
                            </div>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">🛠️</span>
                                <div>
                                    <span className="cert-row-label">Skills:</span>
                                    <div className="cert-skill-tags">
                                        <span>C++</span>
                                        <span>DSA</span>
                                        <span>OOP</span>
                                        <span>Algorithms</span>
                                    </div>
                                </div>
                            </div>
                            <a href="https://drive.google.com/file/d/14V36doXnbQNLGwjR0yZeBCCOUey770EU/view" target="_blank" rel="noreferrer" className="cert-view-btn">View Certificate</a>
                        </div>
                    </div>
                    <p className="cert-hover-hint">Hover to view details</p>
                </div>

                {/* Certificate 2: Coursera SE */}
                <div className="cert-card">
                    <div className="cert-front">
                        <img src="/cert2.png" alt="SE Certificate" className="cert-img" />
                        <div className="cert-overlay"></div>
                        <div className="cert-issuer-badge cert-badge-coursera">Coursera</div>
                        <div className="cert-date-stamp">Apr 2024</div>
                    </div>
                    <div className="cert-back">
                        <div className="cert-back-content">
                            <h3 className="cert-back-title">Software Engineering: Implementation & Testing</h3>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">🏛️</span>
                                <div>
                                    <span className="cert-row-label">Issued by:</span>
                                    <p className="cert-row-value">Coursera</p>
                                </div>
                            </div>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">📅</span>
                                <div>
                                    <span className="cert-row-label">Date:</span>
                                    <p className="cert-row-value">April 2024</p>
                                </div>
                            </div>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">🛠️</span>
                                <div>
                                    <span className="cert-row-label">Skills:</span>
                                    <div className="cert-skill-tags">
                                        <span>Testing</span>
                                        <span>Agile</span>
                                        <span>CI/CD</span>
                                        <span>Design Patterns</span>
                                    </div>
                                </div>
                            </div>
                            <a href="https://www.coursera.org/account/accomplishments/verify/NYKN9R4CSSUE" target="_blank" rel="noreferrer" className="cert-view-btn">View Certificate</a>
                        </div>
                    </div>
                    <p className="cert-hover-hint">Hover to view details</p>
                </div>

                {/* Certificate 3: FreeCodeCamp */}
                <div className="cert-card">
                    <div className="cert-front">
                        <img src="/cert3.png" alt="Web Design Certificate" className="cert-img" />
                        <div className="cert-overlay"></div>
                        <div className="cert-issuer-badge cert-badge-fcc">freeCodeCamp</div>
                        <div className="cert-date-stamp">Nov 2023</div>
                    </div>
                    <div className="cert-back">
                        <div className="cert-back-content">
                            <h3 className="cert-back-title">Responsive Web Design</h3>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">🏛️</span>
                                <div>
                                    <span className="cert-row-label">Issued by:</span>
                                    <p className="cert-row-value">freeCodeCamp</p>
                                </div>
                            </div>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">📅</span>
                                <div>
                                    <span className="cert-row-label">Date:</span>
                                    <p className="cert-row-value">November 2023</p>
                                </div>
                            </div>
                            <div className="cert-back-row">
                                <span className="cert-row-icon">🛠️</span>
                                <div>
                                    <span className="cert-row-label">Skills:</span>
                                    <div className="cert-skill-tags">
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                        <span>Flexbox</span>
                                        <span>Responsive Design</span>
                                    </div>
                                </div>
                            </div>
                            <a href="https://www.freecodecamp.org/certification/fcc795028b6-491d-48b4-8a67-d71c8cb1ff23/responsive-web-design" target="_blank" rel="noreferrer" className="cert-view-btn">View Certificate</a>
                        </div>
                    </div>
                    <p className="cert-hover-hint">Hover to view details</p>
                </div>

            </div>
        </div>
    </section>
  );
}

export default About;
