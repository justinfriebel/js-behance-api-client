import React, { Component } from "react";

class ProfileLocation extends Component {
  render() {
    const { user } = this.props;

    return <p>{user.location}</p>;
  }
}

export default ProfileLocation;
