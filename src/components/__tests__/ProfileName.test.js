import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import React from "react";
import ProfileName from "../profile/ProfileName";
import user from "../__mocks__/user";

describe("ProfileName", () => {
  it("is not null", () => {
    const { getByText } = render(<ProfileName user={user} />);
    expect(getByText(user.display_name)).not.toBeNull();
  });

  it("renders the proper text", () => {
    const { getByText } = render(<ProfileName user={user} />);
    expect(getByText(user.display_name)).toHaveTextContent(user.display_name);
  });
});
