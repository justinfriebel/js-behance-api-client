import React from "react";
import { shallow } from "enzyme";
import ProfileExperience from "../profile/ProfileExperience";
import experience from "../__mocks__/experience.json";
import user from "../__mocks__/user.json";

describe("ProfileExperience", () => {
  const profileExperience = shallow(<ProfileExperience user={user} />);

  beforeAll(() => {
    profileExperience.setState({ experience: experience });
  });

  afterAll(() => {
    profileExperience.setState({ experience: null });
  });

  it("renders the first experience", () => {
    expect(
      profileExperience
        .find("p")
        .at(0)
        .text()
    ).toEqual("Art Director, Designer at Peter Tarka");
  });

  it("renders the second experience", () => {
    expect(
      profileExperience
        .find("p")
        .at(1)
        .text()
    ).toEqual("Designer at JUICE");
  });

  it("renders the third experience", () => {
    expect(
      profileExperience
        .find("p")
        .at(2)
        .text()
    ).toEqual("Designer at JWT (J. Walter Thompson)");
  });
});
