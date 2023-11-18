import React from "react";
import { render, screen } from "@testing-library/react";
import IconLink from "./IconLink";

test("renders IconLink", () => {
    render(
        <div data-testid="link">
            <IconLink iconPosition="right" href="" icon={<></>}>
                test
            </IconLink>
        </div>,
    );
    const iconLink = screen.getByTestId("link");
    expect(iconLink).toBeInTheDocument();
});
