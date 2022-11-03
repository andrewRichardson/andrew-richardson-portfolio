import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./hooks/useMediaQuery", () => {
    return jest.fn((_: string) => false);
});

test("renders Andrew Richardson", () => {
    render(<App />);
    const arElement = screen.getByText(/Andrew Richardson/i);
    expect(arElement).toBeInTheDocument();
});
