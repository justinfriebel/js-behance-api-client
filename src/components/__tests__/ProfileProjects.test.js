import React from "react";
import { shallow } from "enzyme";
import ProfileProjects from "../profile/ProfileProjects";
import user from "../__mocks__/user";

it("renders ProfileProjects without crashing", () => {
  shallow(<ProfileProjects user={user} />);
});
