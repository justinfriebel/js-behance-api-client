import React from "react";

const ProfileAbout = ({ user }) => {
  return <p>{user.sections["About Me"]}</p>;
};

export default ProfileAbout;
