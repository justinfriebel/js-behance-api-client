import React from "react";
import { shallow } from "enzyme";
import ProfileFollowing from "../profile/ProfileFollowing";
import user from "../__mocks__/user";

it("renders ProfileFollowing without crashing", () => {
  shallow(<ProfileFollowing user={user} />);
});

// need to setup a following mock api for more tests

// it("renders a list of following", () => {
//   const wrapper = shallow(<ProfileFollowing user={user} />);
//   const followingList = (
//     <Flex mx={-2}>
//     <Box width={1} px={2}>
//       <h3>Following</h3>
//       {!!following &&
//         following
//           .slice(0, 10)
//           .map(key => <p key={key.username}>{key.display_name}</p>)}
//     </Box>
//   </Flex>
//   );
//   expect(wrapper.contains(followingList)).toEqual(true);
// });
