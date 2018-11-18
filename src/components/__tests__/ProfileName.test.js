import React from "react";
import { shallow } from "enzyme";
import ProfileName from "../profile/ProfileName";
import user from "../__mocks__/user";

it("renders ProfileName without crashing", () => {
  shallow(<ProfileName user={user} />);
});

it("renders the profile name", () => {
  const wrapper = shallow(<ProfileName user={user} />);
  const text = (
    <h2>
      <a href={user.url} target="_blank" rel="noopener noreferrer">
        {user.display_name}
      </a>
    </h2>
  );
  expect(wrapper.contains(text)).toEqual(true);
});
