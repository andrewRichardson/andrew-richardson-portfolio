import { ReactNode } from "react";
import styled from "styled-components";
import { highlight } from "../../utils/colors";

const StyledLink = styled.a`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    width: fit-content;
    color: ${highlight};
    text-decoration: none;

    &::after {
        width: 0px;
        content: "";
        display: block;
        margin: 0 auto;
        height: 2px;
        position: relative;
        bottom: 0.17rem;
        transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
    }

    &:hover::after {
        width: 100%;
        background: ${highlight};
        transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
`;

type LinkProps = {
    href: string;
    children: ReactNode;
    isAnchor?: boolean;
};

const Link = ({ href, children, isAnchor }: LinkProps) => {
    return (
        <StyledLink
            rel="noopener noreferrer"
            target={isAnchor ? undefined : "_blank"}
            href={href}
        >
            {children}
        </StyledLink>
    );
};

export default Link;
