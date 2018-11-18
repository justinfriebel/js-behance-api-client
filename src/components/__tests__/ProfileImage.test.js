import React from "react";
import { shallow } from "enzyme";
import { Image } from "rebass";
import ProfileImage from "../profile/ProfileImage";
import user from "../__mocks__/user";

it("renders ProfileImage without crashing", () => {
  shallow(<ProfileImage user={user} />);
});

it("renders a profile image", () => {
  const wrapper = shallow(<ProfileImage user={user} />);
  const image = (
    <Image
      width={[1, 1, 1 / 2]}
      src={user.images["138"]}
      alt={user.display_name}
    />
  );
  expect(wrapper.contains(image)).toEqual(true);
});
