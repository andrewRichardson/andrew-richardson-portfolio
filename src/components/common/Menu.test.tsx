import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { NAVIGATION_LIST } from "../App";

jest.mock("../../hooks/useMediaQuery", () => ({
    ...jest.requireActual("../../hooks/useMediaQuery"),
    __esModule: true,
    default: () => false,
}));

test("renders Menu", () => {
    render(
        <div data-testid="menu">
            <Menu navList={NAVIGATION_LIST} $showNav={false} />
        </div>,
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
});

jest.mock("../../hooks/useMediaQuery", () => ({
    ...jest.requireActual("../../hooks/useMediaQuery"),
    __esModule: true,
    default: () => true,
}));

test("renders Menu with mobile true", () => {
    render(
        <div data-testid="menu">
            <Menu navList={NAVIGATION_LIST} $showNav={false} />
        </div>,
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
});
