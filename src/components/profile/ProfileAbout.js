import React, { Component } from "react";

class ProfileAbout extends Component {
  render() {
    const { user } = this.props;

    return <p>{user.sections["About Me"]}</p>;
  }
}

export default ProfileAbout;
