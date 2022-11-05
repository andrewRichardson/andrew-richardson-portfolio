import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { normalText, highlight } from "../../utils/colors";

export type ListObject = {
    list: ReactNode[];
    title?: ReactNode;
};

export type ListGroupObject = ListObject[];

type ListType = "none" | "bulleted" | "numbered";

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 0.75rem;
`;

const ColumnContainer = styled.ul`
    padding: 0 40px 0 0;

    @media (max-width: 850px) {
        padding: 0 15px 0 0;
    }
`;

const ListItem = styled.li<{ listType: ListType }>`
    position: relative;
    padding-left: 20px;
    margin: 10px 0;
    list-style: none;
    font-weight: 400;
    color: ${normalText};

    ${(props) =>
        props.listType === "bulleted" &&
        `
        
        ::before {
            color: ${highlight};
            content: ">";
            position: absolute;
            left: 0px;
            line-height: 1.25rem;
        }
    `}
`;

const ListTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: ${highlight};
`;

type ListProps = {
    list: ListGroupObject;
    listType?: ListType;
    columnSize?: number;
};

const getColumns = (list: ListObject, columnSize: number): ListGroupObject => {
    const cols: ListGroupObject = [];

    let row = 0;
    list.list.forEach((value, index) => {
        row = Math.trunc(index / columnSize);
        if (cols[row] === undefined) cols[row].list = [];

        cols[row].list.push(value);
    });

    return cols;
};

const List = ({ list, listType = "bulleted", columnSize }: ListProps) => {
    const columns = useMemo(
        () =>
            columnSize && list.length === 1
                ? getColumns(list[0], columnSize)
                : list,
        [list, columnSize]
    );

    return (
        <ListContainer>
            {columns.map((column, cIndex) => (
                <ColumnContainer key={`list-column-${cIndex}`}>
                    <code>
                        {column.title && <ListTitle>{column.title}</ListTitle>}
                        {column.list.map((value, index) => (
                            <ListItem
                                listType={listType}
                                key={`list-${cIndex}-${index}`}
                            >
                                {listType === "numbered" && `${index + 1}.`}
                                {value}
                            </ListItem>
                        ))}
                    </code>
                </ColumnContainer>
            ))}
        </ListContainer>
    );
};

export default List;
