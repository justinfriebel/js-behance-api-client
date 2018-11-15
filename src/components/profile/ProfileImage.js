import React, { Component } from "react";
import { Image } from "rebass";

class ProfileImage extends Component {
  render() {
    const { user } = this.props;

    return (
      <Image
        width={[1, 1, 1 / 2]}
        src={user.images["138"]}
        alt={user.display_name}
      />
    );
  }
}

export default ProfileImage;
