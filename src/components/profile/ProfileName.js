import React, { Component } from "react";

class ProfileName extends Component {
  render() {
    const { user } = this.props;

    return (
      <h2>
        <a href={user.url} target="_blank" rel="noopener noreferrer">
          {user.display_name}
        </a>
      </h2>
    );
  }
}

export default ProfileName;
