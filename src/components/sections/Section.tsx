import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useIntersection from "../hooks/useIntersection";

const StyledSection = styled.section<{
    align: string;
    fadeIn?: boolean;
}>`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: ${(props) => props.align};
    padding: 0px;
    max-width: 1000px;
    margin: 0 auto;

    @keyframes fade-in-section {
        0% {
            opacity: 0%;
            transform: translateY(4rem);
        }
        70% {
            opacity: 0%;
            transform: translateY(4rem);
        }
        80% {
            opacity: 10%;
        }
        100% {
            opacity: 100%;
            transform: translateY(0);
        }
    }

    ${(props) =>
        props.fadeIn &&
        `
        @media (prefers-reduced-motion: no-preference) {
            animation-name: fade-in-section;
            animation-delay: 0s;
            animation-duration: 0.75s;
            animation-timing-function: ease-in-out;
        }
    `}
`;

type SectionProps = {
    children?: ReactNode;
    id?: string;
    fadeIn?: boolean;
    align?: string;
};

const Section = ({
    id,
    children,
    fadeIn = true,
    align = "center",
}: SectionProps) => {
    const ref: any = useRef(null);
    const isVisible = useIntersection(ref, "-50px");
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isVisible, hasAnimated]);

    return hasAnimated || !isVisible || !fadeIn ? (
        <StyledSection ref={ref} id={id} fadeIn={fadeIn} align={align}>
            {children}
        </StyledSection>
    ) : (
        <></>
    );
};

export default Section;
