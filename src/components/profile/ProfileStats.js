import React, { Component } from "react";
import { Box, Flex } from "rebass";

class ProfileStats extends Component {
  render() {
    const { user } = this.props;

    return (
      <Flex mx={-2}>
        <Box width={1} px={2}>
          <h3>Stats</h3>
          {Object.keys(user.stats).map(key => {
            if (key !== "team_members") {
              return <p key={key}>{`${key}: ${user.stats[key]}`}</p>;
            } else {
              return "";
            }
          })}
        </Box>
      </Flex>
    );
  }
}

export default ProfileStats;
