import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";

test("renders List", () => {
    render(
        <div data-testid="list">
            <List list={[{ list: [<></>], title: <></> }]} />
        </div>,
    );
    const listObject = screen.getByTestId("list");
    expect(listObject).toBeInTheDocument();
});

test("renders numbered List", () => {
    render(
        <div data-testid="list">
            <List
                list={[{ list: [<></>], title: <></> }]}
                $listType="numbered"
            />
        </div>,
    );
    const listObject = screen.getByTestId("list");
    expect(listObject).toBeInTheDocument();
});

test("renders List with columns", () => {
    render(
        <div data-testid="list">
            <List list={[{ list: [] }]} columnSize={1} />
        </div>,
    );
    const listObject = screen.getByTestId("list");
    expect(listObject).toBeInTheDocument();
});

test("renders List with columns and data", () => {
    render(
        <div data-testid="list">
            <List list={[{ list: [<>1</>, <>2</>, <>3</>] }]} columnSize={2} />
        </div>,
    );
    const listObject = screen.getByTestId("list");
    expect(listObject).toBeInTheDocument();
});
