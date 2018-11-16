import React from "react";
import { shallow } from "enzyme";
import ProfileStats from "../profile/ProfileStats";
import user from "../__mocks__/user";

it("renders ProfileStats without crashing", () => {
  shallow(<ProfileStats user={user} />);
});
