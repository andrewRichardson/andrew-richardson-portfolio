import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "./Section";
import * as useIntersection from "../../../hooks/useIntersection";

test("renders Section", () => {
    jest.spyOn(useIntersection, 'default').mockImplementation(() => true);
    render(<Section id="section">section</Section>);
    const section = screen.getByText("section");
    expect(section).toBeInTheDocument();
});
