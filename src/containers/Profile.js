import React, { Component } from "react";
// import styled from "styled-components";
import { Box, Flex, Image } from "rebass";
import ProfileStats from "../components/profile/ProfileStats";
import WorkExperience from "../components/profile/WorkExperience";
import ProfileFollowers from "../components/profile/ProfileFollowers";
import ProfileFollowing from "../components/profile/ProfileFollowing";
import ProfileProjects from "../components/profile/ProfileProjects";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <Flex mx={-2}>
        <Box width={[3 / 8, 1 / 5]} pl={2} pr={4}>
          <Image
            width={[1, 1, 1 / 2]}
            src={user.images["138"]}
            alt={user.display_name}
          />
          <h2>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              {user.display_name}
            </a>
          </h2>
          <p>{user.location}</p>
          <p>{user.sections["About Me"]}</p>
          <ProfileStats user={user} />
          <WorkExperience user={user} />
          <ProfileFollowers user={user} />
          <ProfileFollowing user={user} />
        </Box>
        <Box width={[5 / 8, 4 / 5]} px={2}>
          <ProfileProjects user={user} />
        </Box>
      </Flex>
    );
  }
}

export default Profile;
