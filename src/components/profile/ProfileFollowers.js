import React, { Component } from "react";
import { Box, Flex } from "rebass";
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

  async componentDidUpdate(prevProps) {
    const response = await Api.get(`/${this.props.user.id}/followers`);
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({ followers: response.followers });
    }
  }

  render() {
    const { followers } = this.state;

    return (
      <Flex mx={-2}>
        <Box width={1} px={2}>
          <h3>Followers</h3>
          {!!followers &&
            followers
              .slice(0, 10)
              .map(key => <p key={key.username}>{key.display_name}</p>)}
        </Box>
      </Flex>
    );
  }
}

export default ProfileFollowers;
