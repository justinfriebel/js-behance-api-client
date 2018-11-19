import React from "react";
import { shallow } from "enzyme";
import ProfileProjects from "../profile/ProfileProjects";
import user from "../__mocks__/user.json";
import projects from "../__mocks__/projects.json";

describe("ProfileProjects", () => {
  const profileProject = shallow(<ProfileProjects user={user} />);

  beforeAll(() => {
    profileProject.setState({ projects: projects });
  });

  afterAll(() => {
    profileProject.setState({ projects: null });
  });

  it("renders the first project", () => {
    expect(
      profileProject.findWhere(
        n => n.type() === "h4" && n.contains("YOOX: Make a Wish")
      )
    );
  });

  it("renders the second project", () => {
    expect(
      profileProject.findWhere(
        n => n.type() === "h4" && n.contains("LG Signature")
      )
    );
  });
});
