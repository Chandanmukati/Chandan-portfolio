import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container animate-on-scroll">
          <div className="hero-content">
              <p className="greeting">Hi, my name is</p>
              <h1 className="hero-name">Chandan Mukati.</h1>
              <h2 className="hero-role">I build things for the web.</h2>
              <p className="hero-desc">
                  I am a passionate Software Developer specializing in building exceptional digital experiences. Currently pursuing my B.Tech at LPU, I'm focused on creating accessible, human-centered products using modern technologies.
              </p>
              <div className="hero-cta">
                  <a href="#projects" className="btn btn-primary">Check out my work!</a>
                  <a href="https://github.com/Chandanmukati" target="_blank" rel="noreferrer" className="btn btn-icon"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/chandan-mukati-b9536129a/" target="_blank" rel="noreferrer" className="btn btn-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
          </div>
          <div className="hero-image-wrapper">
              <div className="image-border"></div>
              <img src="/profile.png" alt="Chandan Mukati" className="profile-img" />
          </div>
      </div>
    </section>
  );
}

export default Hero;
