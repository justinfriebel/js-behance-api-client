import React from "react";
import { shallow } from "enzyme";
import Profile from "../Profile";

it("renders the Profile without crashing", () => {
  shallow(<Profile />);
});
