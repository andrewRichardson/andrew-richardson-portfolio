import { ReactNode } from "react";
import styled from "styled-components";
import { lightText } from "../../utils/colors";
import Link from "./Link";

const StyledLink = styled(Link)`
    font-size: clamp(25px, 6vw, 50px);
    color: ${lightText};

    &:hover::after {
        background: ${lightText};
        transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
    }

    &:hover {
        img {
            transform: translateY(-0.35rem);
        }
    }

    img {
        transition: all 0.25s ease-in-out;
    }
`;

type IconLinkProps = {
    icon: ReactNode;
    href: string;
    children: ReactNode;
    iconPosition?: "left" | "right";
    isAnchor?: boolean;
};

const IconLink = ({
    icon,
    href,
    children,
    iconPosition = "left",
    isAnchor,
}: IconLinkProps) => {
    return (
        <StyledLink href={href} isAnchor={isAnchor}>
            {iconPosition === "left" ? (
                <>
                    {icon} {children}
                </>
            ) : (
                <>
                    {children} {icon}
                </>
            )}
        </StyledLink>
    );
};

export default IconLink;
