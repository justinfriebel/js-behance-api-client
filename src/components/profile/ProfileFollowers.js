import React, { Component } from "react";
import { Api } from "../../Api";

class ProfileFollowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null
    };
  }

  async componentDidMount() {
    const response = await Api.get(`/${this.props.user.id}/followers`);
    this.setState({ followers: response.followers });
  }

  render() {
    const { followers } = this.state;
    return (
      <div>
        <h3>Followers</h3>
        {!!followers &&
          followers.map(key => <p key={key.username}>{key.display_name}</p>)}
      </div>
    );
  }
}

export default ProfileFollowers;
