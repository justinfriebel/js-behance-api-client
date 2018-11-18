import React from "react";
import { Image } from "rebass";

const ProfileImage = ({ user }) => {
  return (
    <Image
      width={[1, 1, 4 / 5]}
      src={user.images["276"]}
      alt={user.display_name}
      borderRadius="50%"
    />
  );
};

export default ProfileImage;
