import profilePic from '../assets/profile.jpg';

function Profile() {
  return (
    <div className="clean-profile-showcase">
      {/* Avatar Container */}
      <div className="avatar-wrapper">
        <div className="avatar-frame">
          <img
            src={profilePic}
            alt="Cheng Virak"
            className="profile-avatar-img"
          />
          <div className="avatar-status-badge" title="Available for projects">
            <span className="status-dot"></span>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-bio-info">
        <h3 className="profile-name">Cheng Virak</h3>
        <p className="profile-role">ITE Student & Full Stack Developer</p>
        <div className="profile-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <span>RUPP • Phnom Penh, Cambodia</span>
        </div>
      </div>

      {/* Clean Highlights */}
      <div className="profile-tags-row">
        <span className="tech-tag">React.js</span>
        <span className="tech-tag">JavaScript</span>
        <span className="tech-tag">PHP & MySQL</span>
      </div>
    </div>
  );
}

export default Profile;
