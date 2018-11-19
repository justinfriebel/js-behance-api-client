import React, { Component } from "react";
import { Box, Flex, Link } from "rebass";
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

  async componentDidUpdate(prevProps) {
    const response = await Api.get(`/${this.props.user.id}/following`);
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({ following: response.following });
    }
  }

  render() {
    const { following } = this.state;

    return (
      <Flex mx={-2}>
        <Box width={1} px={2}>
          {!!following && <h3>Following</h3>}
          {!!following &&
            following.slice(0, 10).map(followe => (
              <p key={followe.username}>
                <Link
                  href={followe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {followe.display_name}
                </Link>
              </p>
            ))}
        </Box>
      </Flex>
    );
  }
}

export default ProfileFollowing;
