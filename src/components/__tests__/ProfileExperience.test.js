import React from "react";
import { shallow } from "enzyme";
import ProfileExperience from "../profile/ProfileExperience";
import user from "../__mocks__/user";

it("renders ProfileExperience without crashing", () => {
  shallow(<ProfileExperience user={user} />);
});
