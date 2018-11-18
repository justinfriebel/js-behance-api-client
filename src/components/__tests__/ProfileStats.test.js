import React from "react";
import { shallow } from "enzyme";
import { Box, Flex } from "rebass";
import ProfileStats from "../profile/ProfileStats";
import user from "../__mocks__/user";

it("renders ProfileStats without crashing", () => {
  shallow(<ProfileStats user={user} />);
});

it("renders the profile stats list", () => {
  const wrapper = shallow(<ProfileStats user={user} />);
  const text = (
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
  expect(wrapper.contains(text)).toEqual(true);
});
