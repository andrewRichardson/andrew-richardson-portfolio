import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceSectionList from "./ExperienceSectionList";

const mockExperience = {
    company: "company",
    id: "id",
    title: "title",
    dates: "dates",
    bullets: ["bullets"],
};

test("renders Section", async () => {
    render(
        <ExperienceSectionList
            experience={mockExperience}
            should$fadeOut={true}
        />,
    );
    const section = await screen.findByText("title");
    expect(section).toBeInTheDocument();
});
