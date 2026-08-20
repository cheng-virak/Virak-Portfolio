import { useState } from 'react';
import '../style/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('virakbczin05@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'virakbczin05@gmail.com',
      actionText: 'Copy Email',
      action: handleCopyEmail,
      isButton: true
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/cheng-virak',
      actionText: 'Visit Profile',
      link: 'https://github.com/cheng-virak',
      isButton: false
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Phnom Penh, Cambodia (RUPP)',
      actionText: 'Available Remotely & On-site',
      isButton: false
    }
  ];

  return (
    <div className="contact-page-container page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-subtitle-badge">Get In Touch</span>
          <h1 className="page-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h1>
          <p className="page-description">
            Have a project in mind, an internship opportunity, or just want to talk software engineering? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="availability-card glass-panel mb-4">
              <div className="status-badge mb-2">
                <span className="status-dot"></span>
                <span>Open for Opportunities</span>
              </div>
              <h3 className="availability-title">Available for Internships & Junior Roles</h3>
              <p className="availability-desc">
                Currently open to frontend, full-stack, and software engineering roles in Cambodia or remote setups.
              </p>
            </div>

            <div className="contact-cards-list">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="contact-method-card glass-card">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <span className="method-title">{method.title}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                  <div className="method-action">
                    {method.isButton ? (
                      <button 
                        onClick={method.action} 
                        className={`copy-btn ${copied ? 'copied' : ''}`}
                        title="Copy email to clipboard"
                      >
                        {copied ? '✓ Copied!' : '📋 Copy'}
                      </button>
                    ) : method.link ? (
                      <a 
                        href={method.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="method-link-arrow"
                        title={method.actionText}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              <h2 className="form-card-title">Send a Direct Message</h2>
              <p className="form-card-subtitle">Fill out the form below and I'll get back to you promptly.</p>

              {submitted && (
                <div className="success-alert">
                  <div className="success-icon">🎉</div>
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="btn-glow submit-btn w-100 justify-content-center"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
