import React from "react";
import { render, screen } from "@testing-library/react";
import ScrollPrompt from "./ScrollPrompt";

jest.mock("../../hooks/useMediaQuery", () => {
    return jest.fn((_: string) => false);
});

test("renders ScrollPrompt", () => {
    render(
        <div data-testid="scroll">
            <ScrollPrompt $showNav={false} />
        </div>,
    );
    const paper = screen.getByTestId("scroll");
    expect(paper).toBeInTheDocument();
});
