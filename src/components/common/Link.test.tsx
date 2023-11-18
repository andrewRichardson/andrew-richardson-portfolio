import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./Link";

test("renders Link", () => {
    render(
        <div data-testid="link">
            <Link isAnchor={false} href="">
                test
            </Link>
        </div>,
    );
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
});

test("renders Link anchor", () => {
    render(
        <div data-testid="link">
            <Link isAnchor={true} href="">
                test
            </Link>
        </div>,
    );
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
});
