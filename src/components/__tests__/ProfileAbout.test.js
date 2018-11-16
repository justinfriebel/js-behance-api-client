import React from "react";
import { shallow } from "enzyme";
import ProfileAbout from "../profile/ProfileAbout";
import user from "../__mocks__/user";

it("renders ProfileAbout without crashing", () => {
  shallow(<ProfileAbout user={user} />);
});
