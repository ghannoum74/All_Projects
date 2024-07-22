import PropTypes from "prop-types";
const User = ({ user }) => {
  return (
    <div className="slide">
      <div className="profile-user">
        <img src={user} alt="" />
        <div className="student-data">
          <h3 className="username">Emily Williams</h3>
          <div className="user-address">Edusity,USA</div>
        </div>
      </div>
      <div className="user-feedback">
        Choosing to pursue my degree at Edusity was one of the best decisions
        I&apos;ve ever made. The supportive community, state-of-the-art
        facilities, and commitment to academic excellence have truly exceeded my
        expectations.
      </div>
    </div>
  );
};

export default User;
