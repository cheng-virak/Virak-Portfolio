import profilePic from '../assets/profile.jpg';

function Profile() {
  return (
    <div className="modern-profile-showcase">
      {/* Background Glow Orb */}
      <div className="profile-glow-halo"></div>

      {/* Floating Badges */}
      <div className="floating-chip chip-top-left animate-float">
        <span className="chip-icon">⚛️</span>
        <span className="chip-text">React.js</span>
      </div>

      <div className="floating-chip chip-top-right animate-float" style={{ animationDelay: '1.2s' }}>
        <span className="chip-icon">⚡</span>
        <span className="chip-text">JavaScript</span>
      </div>

      <div className="floating-chip chip-bottom-left animate-float" style={{ animationDelay: '2.4s' }}>
        <span className="chip-icon">🐘</span>
        <span className="chip-text">PHP & MySQL</span>
      </div>

      {/* Avatar Container */}
      <div className="avatar-frame">
        <div className="avatar-border-gradient">
          <img
            src={profilePic}
            alt="Cheng Virak"
            className="profile-avatar-img"
          />
        </div>
        <div className="avatar-status-indicator" title="Available for projects">
          <span className="status-dot"></span>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-bio-info">
        <h3 className="profile-name">Cheng Virak</h3>
        <p className="profile-role">ITE Engineering Student & Web Developer</p>
        <div className="profile-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <span>RUPP • Phnom Penh, Cambodia</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
