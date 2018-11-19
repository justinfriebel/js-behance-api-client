import React from "react";
import { shallow } from "enzyme";
import ProfileFollowing from "../profile/ProfileFollowing";
import user from "../__mocks__/user.json";
import following from "../__mocks__/following.json";

describe("ProfileFollowing", () => {
  const profileFollowing = shallow(<ProfileFollowing user={user} />);

  beforeAll(() => {
    profileFollowing.setState({ following: following });
  });

  afterAll(() => {
    profileFollowing.setState({ following: null });
  });

  it("renders the second follower", () => {
    expect(
      profileFollowing
        .find("p")
        .at(1)
        .text()
    ).toEqual("Agnieszka Janich");
  });

  it("renders the third follower", () => {
    expect(
      profileFollowing
        .find("p")
        .at(2)
        .text()
    ).toEqual("jonathan ball / pokedstudio");
  });
});
