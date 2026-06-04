import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer text-light">
            <div className="footer-container container">
                <h3>Virak Portfolio</h3>
                <p>Web Developer | ITE Student</p>

                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <p className="copyright">
                    &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
