import { ReactNode } from "react";
import styled from "styled-components";
import { highlight } from "../../../utils/colors";

const StyledHeading = styled.h1<{ $align?: "left" | "right" | "center" }>`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 0;
    width: 100%;
    font-size: clamp(20px, 7vw, 30px);
    white-space: nowrap;
    font-weight: 400;
    line-height: 1.1;
    color: ${highlight};

    ${(props) =>
        props.$align === "left" &&
        `
            text-align: left;
            margin-right: auto !important;

            ::after {
            content: "";
            position: relative;
            display: block;
            top: 0;
            margin-left: 20px;
            width: 100%;
            height: 1px;
            background: ${highlight};
        }`}
    ${(props) =>
        props.$align === "right" &&
        `
            text-align: right;
            margin-left: auto !important;

            ::before {
            content: "";
            position: relative;
            display: block;
            top: 0;
            margin-right: 20px;
            width: 100%;
            height: 1px;
            background: ${highlight};
        }`}
    ${(props) =>
        props.$align === "center" &&
        `
            width: unset;
            text-align: center;
            margin: 0 auto !important;
        `}
`;

type SectionHeadingProps = {
    children: ReactNode;
    $align?: "left" | "right" | "center";
};

const SectionHeading = ({ children, $align = "left" }: SectionHeadingProps) => {
    return <StyledHeading $align={$align}>{children}</StyledHeading>;
};

export default SectionHeading;
