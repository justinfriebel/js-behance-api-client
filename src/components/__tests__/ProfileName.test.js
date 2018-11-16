import React from "react";
import { shallow } from "enzyme";
import ProfileName from "../profile/ProfileName";
import user from "../__mocks__/user";

it("renders ProfileName without crashing", () => {
  shallow(<ProfileName user={user} />);
});
