import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import React from "react";
import ProfileAbout from "../profile/ProfileAbout";
import user from "../__mocks__/user";

it("renders a profile about section", () => {
  const { getByText } = render(<ProfileAbout user={user} />);

  expect(getByText(user.sections["About Me"])).not.toBeNull();
});
