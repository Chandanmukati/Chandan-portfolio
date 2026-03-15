import React, { useState } from 'react';

function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);

      const formData = new FormData(event.target);
      // Replace this string with your actual Web3Forms Access Key
      formData.append("access_key", "f952cfcb-0314-4879-ad03-c97ed804772e");

      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
          });

          const data = await response.json();

          if (data.success) {
              setIsSuccess(true);
              setTimeout(() => {
                  setIsSuccess(false);
                  event.target.reset();
              }, 3000);
          } else {
              console.error("Error submitting form", data);
              alert("Something went wrong! Please try again later.");
          }
      } catch (error) {
          console.error("Error submitting form", error);
          alert("Something went wrong! Please try again later.");
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container animate-on-scroll">
          <div className="skills-header">
              <h2 className="skills-big-title">Get <span className="gradient-text">In Touch</span></h2>
              <p className="skills-subtitle">Have a question or want to work together? Fill out the form below or reach out directly through my contact information.</p>
          </div>

          <div className="contact-layout">
              {/* Left: Contact Form */}
              <div className="contact-form-panel glass-panel">
                  <form id="contactForm" onSubmit={handleFormSubmit}>
                      <div className="form-group">
                          <label htmlFor="contactName">Name</label>
                          <input type="text" id="contactName" name="name" placeholder="Your name" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="contactEmail">Email</label>
                          <input type="email" id="contactEmail" name="email" placeholder="your.email@example.com" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="contactMessage">Message</label>
                          <textarea id="contactMessage" name="message" placeholder="Your message..." rows="5" required></textarea>
                      </div>
                      <button 
                          type="submit" 
                          className="btn btn-send" 
                          disabled={isSuccess || isSubmitting}
                          style={isSuccess ? { background: 'linear-gradient(135deg, #00e5b0, #39d353)' } : {}}
                      >
                          {isSubmitting ? (
                              <>Sending... <i className="fas fa-spinner fa-spin"></i></>
                          ) : isSuccess ? (
                              <><i className="fas fa-check"></i> Message Sent!</>
                          ) : (
                              <>Send Message <i className="fas fa-paper-plane"></i></>
                          )}
                      </button>
                  </form>
              </div>

              {/* Right: Contact Info */}
              <div className="contact-info-panel glass-panel">
                  <h3 className="contact-info-heading">Contact Information</h3>
                  <div className="contact-info-list">
                      <div className="contact-info-item">
                          <div className="contact-info-icon-wrap"><i className="fas fa-envelope"></i></div>
                          <div>
                              <span className="contact-info-label">Email</span>
                              <a href="mailto:chandanmukati77777@gmail.com" className="contact-info-value">chandanmukati77777@gmail.com</a>
                          </div>
                      </div>
                      <div className="contact-info-item">
                          <div className="contact-info-icon-wrap"><i className="fas fa-phone"></i></div>
                          <div>
                              <span className="contact-info-label">Phone</span>
                              <a href="tel:+917828614337" className="contact-info-value">+91 7828614337</a>
                          </div>
                      </div>
                      <div className="contact-info-item">
                          <div className="contact-info-icon-wrap"><i className="fab fa-linkedin-in"></i></div>
                          <div>
                              <span className="contact-info-label">LinkedIn</span>
                              <a href="https://www.linkedin.com/in/chandan-mukati-b9536129a/" target="_blank" rel="noreferrer" className="contact-info-value">linkedin.com/in/chandan-mukati</a>
                          </div>
                      </div>
                      <div className="contact-info-item">
                          <div className="contact-info-icon-wrap"><i className="fab fa-github"></i></div>
                          <div>
                              <span className="contact-info-label">GitHub</span>
                              <a href="https://github.com/Chandanmukati" target="_blank" rel="noreferrer" className="contact-info-value">github.com/Chandanmukati</a>
                          </div>
                      </div>
                  </div>

                  <div className="contact-follow">
                      <span className="contact-follow-label">Follow Me</span>
                      <div className="contact-social-row">
                          <a href="https://github.com/Chandanmukati" target="_blank" rel="noreferrer" className="contact-social-btn"><i className="fab fa-github"></i></a>
                          <a href="https://www.linkedin.com/in/chandan-mukati-b9536129a/" target="_blank" rel="noreferrer" className="contact-social-btn"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}

export default Contact;
