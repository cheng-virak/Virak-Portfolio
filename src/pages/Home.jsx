import Profile from '../commponants/Profile';
import heroIllustration from '../assets/hero.png';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <section className="home container">
            <div className="home-content">
                <h1>Hi, I'm Virak Cheng</h1>
                <hr className="home-divider" />
                <p>Frontend Developer & Information Technology Engineering Student</p>
                <p>I build modern websites using React, Bootstrap, and JavaScript. I am passionate about creating user-friendly and visually appealing web applications.</p>

                <div className="home-actions">
                    <button className="btn btn-primary mt-3" onClick={() => window.location.href = '/contact'}>Contact Me</button>
                    <button className="btn btn-outline-light mt-3" onClick={() => window.location.href = '/projects'}>View My Work</button>
                </div>
            </div>

            <div className="home-profile">
                <Profile />
            </div>
        </section>
    );
}

export default Home;
