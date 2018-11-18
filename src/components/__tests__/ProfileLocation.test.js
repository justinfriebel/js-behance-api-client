import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import React from "react";
import ProfileLocation from "../profile/ProfileLocation";
import user from "../__mocks__/user";

describe("ProfileLocation", () => {
  it("is not null", () => {
    const { getByText } = render(<ProfileLocation user={user} />);
    expect(getByText(user.location)).not.toBeNull();
  });

  it("renders the proper location", () => {
    const { getByText } = render(<ProfileLocation user={user} />);
    expect(getByText(user.location)).toHaveTextContent(user.location);
  });
});
