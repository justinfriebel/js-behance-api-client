import React from "react";
import { Image } from "rebass";

const ProfileImage = ({ user }) => {
  return (
    <Image
      width={[1, 1, 1 / 2]}
      src={user.images["138"]}
      alt={user.display_name}
    />
  );
};

export default ProfileImage;
