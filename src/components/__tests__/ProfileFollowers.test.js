import React from "react";
import { shallow } from "enzyme";
import ProfileFollowers from "../profile/ProfileFollowers";
import user from "../__mocks__/user";

it("renders ProfileFollowers without crashing", () => {
  shallow(<ProfileFollowers user={user} />);
});
