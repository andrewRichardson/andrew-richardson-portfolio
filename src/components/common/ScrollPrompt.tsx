import React from "react";
import styled from "styled-components";
import { Down } from "../../assets";
import { highlight, background } from "../../utils/colors";
import useMediaQuery from "../../hooks/useMediaQuery";

const ScrollPromptContainer = styled.div<{ showNav: boolean }>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 0;
    background: ${background};
    z-index: 1000;
    opacity: 0%;
    bottom: 4rem;
    right: 4rem;

    ${(props) =>
        !props.showNav &&
        `
        display: none;
    `}

    animation: bounce 4s infinite 2.5s ease-in-out;

    @keyframes bounce {
        0% {
            opacity: 50%;
            bottom: 4rem;
        }
        35% {
            bottom: 4rem;
        }
        40% {
            bottom: 5rem;
        }
        45% {
            bottom: 4rem;
        }
        50% {
            bottom: 4rem;
        }
        55% {
            bottom: 5rem;
        }
        60% {
            bottom: 4rem;
        }
        100% {
            bottom: 4rem;
            opacity: 50%;
        }
    }

    &:hover {
        animation: unset;
        opacity: 100%;
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const LogoContainer = styled.a<{ size: number }>`
    display: flex;
    justify-content: center;
    margin: 30px 10px 10px 10px;
    padding: 10px;

    svg {
        stroke: none;
        fill: ${highlight};
        width: 40px;
        height: 40px;
    }

    @media (max-width: 850px) {
        margin: 0;
    }

    &:hover {
        -webkit-box-shadow: inset 0px -60px 0px 0px ${highlight};
        svg {
            fill: ${background};

            #logo-cursor {
                fill: ${background} !important;
            }
        }
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

type ScrollPromptProps = {
    showNav: boolean;
};

const ScrollPrompt = ({ showNav }: ScrollPromptProps) => {
    const isMobile = useMediaQuery("(max-width: 850px)");

    return (
        <ScrollPromptContainer showNav={showNav && !isMobile}>
            <LogoContainer href="#about" size={40}>
                <Down id="down-arrow" />
            </LogoContainer>
        </ScrollPromptContainer>
    );
};

export default ScrollPrompt;
