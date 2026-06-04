import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';

function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg site-navbar">
            <Link to="/" className="navbar-brand logo text-decoration-none">
                <span className="logo-name">CHENG Virak</span>
            </Link>
            <p className="logo-title m-0">| Software Engineer</p>
            
            <ul className="nav-menu nav-menu-active nav-menu-left">
                
                {/* ABOUT ME */}
                <li>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-fill d-lg-none" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <span className="d-none d-lg-inline">About Me</span>
                    </Link>
                </li>

                {/* SKILLS */}
                <li>
                    <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-code-slash d-lg-none" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                        </svg>
                        <span className="d-none d-lg-inline">Skills</span>
                    </Link>
                </li>

                {/* PROJECTS */}
                <li>
                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-folder-fill d-lg-none" viewBox="0 0 16 16">
                            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31A2 2 0 0 1 2.181 3h3.978a2 2 0 0 0 1.42-.586l1.028-1.029A2 2 0 0 1 9.828 1zm-2.95 3.05a.5.5 0 1 0-.708.708L7.293 8l-1.121 1.121a.5.5 0 1 0 .708.708L8 8.707l1.121 1.122a.5.5 0 0 0 .708-.708L8.707 8l1.122-1.121a.5.5 0 1 0-.708-.708L8 7.293z"/>
                        </svg>
                        <span className="d-none d-lg-inline">Projects</span>
                    </Link>
                </li>

                {/* CONTACT */}
                <li>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope-fill d-lg-none" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.565L16 11.801V4.697z"/>
                        </svg>
                        <span className="d-none d-lg-inline">Contact</span>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar
