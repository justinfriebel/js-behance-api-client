import React from "react";
import { Link } from "rebass";

const ProfileName = ({ user }) => {
  return (
    <h2>
      <Link href={user.url} target="_blank" rel="noopener noreferrer">
        {user.display_name}
      </Link>
    </h2>
  );
};

export default ProfileName;
