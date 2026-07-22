import Profile from '../commponants/Profile';
import '../style/About.css';

function About() {
    return (
        <div className="about-page container">

            <section className="hero-section">
                <div>
                    <span className="badge">IT Engineering Student & Developer</span>
                    <h1>Hi, I'm <span className="highlight">Cheng Virak</span>.</h1>
                    <p className="pitch">
                        I specialize in building responsive, database-driven web applications and core backend logic.
                        Passionate about clean architecture, system performance, and solving practical software problems.
                    </p>
                    <div className="cta-buttons">
                        <a href="#contact" className="btn btn-primary">Get in Touch</a>
                    </div>
                </div>
                <div className="about-profile"><Profile /></div>
            </section>

            <hr className="divider" />

            <section className="section">
                <h2>About My Journey</h2>
                <div className="story-content">
                    <p>
                        Currently pursuing my degree in Information Technology Engineering at RUPP, my focus revolves around building reliable software from the ground up. Whether designing relational MySQL databases, writing clean PHP logic, or configuring local development environments, I enjoy turning complex system logic into functional web applications.
                    </p>
                    <p>
                        Beyond core backend and web development, I have a deep interest in practical cryptography, algorithms, and data structures. I am constantly expanding my technical toolkit—currently transitioning from fundamental web technologies into modern full-stack frameworks like React and Laravel.
                    </p>
                </div>
            </section>


            <section className="section">
                <h2>Technical Toolkit</h2>
                <div className="table-wrapper">
                    <table className="skills-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Technologies & Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Languages</strong></td>
                                <td>HTML5, CSS3, JavaScript, PHP, Java, Python</td>
                            </tr>
                            <tr>
                                <td><strong>Backend & Database</strong></td>
                                <td>MySQL, Relational Database Design, RESTful APIs, Apache</td>
                            </tr>
                            <tr>
                                <td><strong>Tools & Environment</strong></td>
                                <td>Git, GitHub, XAMPP, Linux CLI</td>
                            </tr>
                            <tr>
                                <td><strong>Currently Exploring</strong></td>
                                <td>React, Laravel, Modern Frontend Tooling</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2>How I Work</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Root-Cause Problem Solving</h3>
                        <p>I don't just apply quick fixes—I enjoy diving deep into server configurations, port conflicts, or merge issues to understand why things work.</p>
                    </div>
                    <div className="value-card">
                        <h3>Responsive & Accessible Design</h3>
                        <p>I build web interfaces prioritizing smooth user experience and layout consistency across both mobile and desktop displays.</p>
                    </div>
                    <div className="value-card">
                        <h3>Version Control & Collaboration</h3>
                        <p>Accustomed to managing clean Git repositories, resolving merge conflicts, and writing maintainable code ready for team collaboration.</p>
                    </div>
                </div>
            </section>

            <hr className="divider" />

            <section id="contact" className="contact-section">
                <h2>Let's Connect</h2>
                <p>I'm always open to discussing new projects, technical challenges, or internship opportunities.</p>
                <div className="social-links">
                    <a href="mailto:virakbczin05@gmail.com" className="contact-link">Email Me</a>
                    <a href="https://github.com/cheng-virak" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
                </div>
            </section>

        </div>
    );
}

export default About
