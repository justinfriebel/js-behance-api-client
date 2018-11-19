import React from "react";
import { Image, Link } from "rebass";

const ProfileImage = ({ user }) => {
  return (
    <Link href={user.url} target="_blank" rel="noopener noreferrer">
      <Image
        width={[1, 1, 4 / 5]}
        src={user.images["276"]}
        alt={user.display_name}
        borderRadius="50%"
      />
    </Link>
  );
};

export default ProfileImage;
