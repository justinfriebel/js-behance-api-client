import React from "react";

const ProfileName = ({ user }) => {
  return (
    <h2>
      <a href={user.url} target="_blank" rel="noopener noreferrer">
        {user.display_name}
      </a>
    </h2>
  );
};

export default ProfileName;
