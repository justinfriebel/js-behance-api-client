import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import React from "react";
import ProfileImage from "../profile/ProfileImage";
import user from "../__mocks__/user";

describe("ProfileImage", () => {
  it("is not null", () => {
    const { getByAltText } = render(<ProfileImage user={user} />);
    expect(getByAltText(user.display_name)).not.toBeNull();
  });

  it("renders the image", () => {
    const { getByAltText } = render(<ProfileImage user={user} />);
    expect(getByAltText(user.display_name)).toBeInTheDocument();
  });
});
