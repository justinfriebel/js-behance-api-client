import React from "react";
import { shallow } from "enzyme";
import ProfileFollowing from "../profile/ProfileFollowing";
import user from "../__mocks__/user";

it("renders ProfileFollowing without crashing", () => {
  shallow(<ProfileFollowing user={user} />);
});
