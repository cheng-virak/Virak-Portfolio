import Profile from '../commponants/Profile';
import '../style/About.css';

function About() {
    return (
        <section className="about container">
            <div className="page-section container text-center flex">
                <div className="about-content">
                    <h1>Cheng Virak</h1>
                    <p>This is the about page.</p>
                </div>
                <div className="about-profile">
                    <Profile />
                </div>
            </div>
        </section>
    );
}

export default About
