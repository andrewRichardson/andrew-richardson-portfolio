import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MobileMenu from "./MobileMenu";
import { NAVIGATION_LIST } from "../App";

test("renders MobileMenu", () => {
    render(
        <div data-testid="menu">
            <MobileMenu navList={NAVIGATION_LIST} $isOpen={true} setIsOpen={() => {}} />
        </div>,
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
});

test("renders MobileMenu and clicks about", () => {
    render(
        <div data-testid="menu">
            <MobileMenu navList={NAVIGATION_LIST} $isOpen={true} setIsOpen={() => {}} />
        </div>,
    );
    const about = screen.getAllByRole("link");
    about?.[0]?.click();

    const menu = screen.getByTestId("menu");
    fireEvent.mouseDown(menu);

    if (about?.[0]) fireEvent.mouseDown(about?.[0]);
    expect(menu).toBeInTheDocument();
});
