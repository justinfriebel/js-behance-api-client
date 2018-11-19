import React, { Component } from "react";
import { Box, Flex } from "rebass";
import ProfileImage from "../components/profile/ProfileImage";
import ProfileName from "../components/profile/ProfileName";
import ProfileLocation from "../components/profile/ProfileLocation";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileExperience from "../components/profile/ProfileExperience";
import ProfileFollowers from "../components/profile/ProfileFollowers";
import ProfileFollowing from "../components/profile/ProfileFollowing";
import ProfileProjects from "../components/profile/ProfileProjects";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <Flex mx={-2}>
        <Box width={[3 / 8, 1 / 5]} pl={2} mr={5}>
          <ProfileImage user={user} />
          <ProfileName user={user} />
          <ProfileLocation user={user} />
          <ProfileStats user={user} />
          <ProfileExperience user={user} />
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
