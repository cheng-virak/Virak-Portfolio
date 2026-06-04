import profilePic from "../assets/profile.jpg";

function Profile() {
  return (
    <div className=" profile-card">
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-circle mx-auto mb-3 border"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover"
        }}
      />

      <h4>ITE Student at RUPP</h4>
      <p>Web and App Developer</p>
    </div>
  );
}

export default Profile;
