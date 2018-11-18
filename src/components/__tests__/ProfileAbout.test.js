import React from "react";
import { shallow } from "enzyme";
import ProfileAbout from "../profile/ProfileAbout";
import user from "../__mocks__/user";

it("renders ProfileAbout without crashing", () => {
  shallow(<ProfileAbout user={user} />);
});

it("renders the about me text", () => {
  const wrapper = shallow(<ProfileAbout user={user} />);
  const text = <p>{user.sections["About Me"]}</p>;
  expect(wrapper.contains(text)).toEqual(true);
});
