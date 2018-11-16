import React from "react";
import { shallow } from "enzyme";
import ProfileImage from "../profile/ProfileImage";
import user from "../__mocks__/user";

it("renders ProfileImage without crashing", () => {
  shallow(<ProfileImage user={user} />);
});
