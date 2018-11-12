import React, { Component } from "react";
import { Api } from "../../Api";

class ProfileFollowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: null
    };
  }

  async componentDidMount() {
    const response = await Api.get(`/${this.props.user.id}/following`);
    this.setState({ following: response.following });
  }

  render() {
    const { following } = this.state;
    return (
      <div>
        <h3>Following</h3>
        {!!following &&
          following.map(key => <p key={key.username}>{key.display_name}</p>)}
      </div>
    );
  }
}

export default ProfileFollowing;
