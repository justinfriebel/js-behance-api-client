import React from "react";
import { shallow } from "enzyme";
import ProfileFollowers from "../profile/ProfileFollowers";
import user from "../__mocks__/user.json";
import followers from "../__mocks__/followers.json";

describe("ProfileFollowers", () => {
  const profileFollowers = shallow(<ProfileFollowers user={user} />);

  beforeAll(() => {
    profileFollowers.setState({ followers: followers });
  });

  afterAll(() => {
    profileFollowers.setState({ followers: null });
  });

  it("renders the first follower", () => {
    expect(
      profileFollowers
        .find("p")
        .at(0)
        .text()
    ).toEqual("Vanessa Franco C");
  });

  it("renders the second follower", () => {
    expect(
      profileFollowers
        .find("p")
        .at(1)
        .text()
    ).toEqual("Sherry Li");
  });
});
