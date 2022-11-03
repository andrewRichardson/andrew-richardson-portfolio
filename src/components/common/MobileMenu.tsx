import { Divide as Hamburger } from "hamburger-react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Email, Book, Info, Paper } from "../../assets";
import { background, highlight } from "../../utils/colors";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import useMediaQuery from "../hooks/useMediaQuery";

const HamburgerMenuContainer = styled.div<{ isOpen?: boolean }>`
    transform: translate(-2rem, 0rem);
    font-size: 400px;
    width: 80px;

    @media (min-width: 850px) {
        display: none;
    }

    @keyframes fade-in-hamburger {
        0% {
            opacity: 0%;
        }
        50% {
            opacity: 50%;
        }
        100% {
            opacity: 100%;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-hamburger 1.5s 0s ease-in-out;
    }

    .hamburger-react > div {
        z-index: 10;
    }

    ${(props) =>
        props.isOpen &&
        `
    .hamburger-react > div {
        background: ${background} !important;
    }
`}

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const HamburgerMenu = styled.div<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 1em;
    * {
        fill: ${background};
    }
    -webkit-box-shadow: none;

    ${(props) =>
        props.isOpen &&
        `
        -webkit-box-shadow: inset 0px 1em 0px 0px ${highlight};
`}

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const HamburgerMenuOption = styled.a<{
    isPlaceholder?: boolean;
    isOpen?: boolean;
}>`
    font-size: 16px;
    padding: 25px;
    width: 30px;
    height: 30px;

    ${(props) =>
        props.isPlaceholder &&
        `
        padding: 0;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ${(props) =>
        props.isPlaceholder &&
        !props.isOpen &&
        `
        &:hover {
            background: ${highlight};

            * {
                fill: ${background} !important;
            }
            .hamburger-react > div {
                background: ${background} !important;
            }
        }
    `}

&:hover {
        background: ${background};

        * {
            fill: ${highlight} !important;
        }
        .hamburger-react > div {
            background: ${highlight} !important;
        }
    }

    * {
        transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
`;

const MobileMenu = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const matches = useMediaQuery("min-width: 850px");

    const wrapperRef: any = useRef(null);
    useOutsideAlerter(wrapperRef, () => setIsBurgerMenuOpen(false));

    useEffect(() => {
        if (matches) setIsBurgerMenuOpen(false);
    }, [matches]);
    return (
        <HamburgerMenuContainer isOpen={isBurgerMenuOpen} ref={wrapperRef}>
            <HamburgerMenu isOpen={isBurgerMenuOpen}>
                <HamburgerMenuOption isPlaceholder isOpen={isBurgerMenuOpen}>
                    <Hamburger
                        size={55}
                        color={highlight}
                        toggled={isBurgerMenuOpen}
                        toggle={setIsBurgerMenuOpen}
                        duration={0.25}
                    />
                </HamburgerMenuOption>
                {isBurgerMenuOpen && (
                    <>
                        <HamburgerMenuOption
                            href="https://www.linkedin.com/in/andrew-roland-richardson/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Info />
                        </HamburgerMenuOption>
                        <HamburgerMenuOption
                            href="https://github.com/andrewRichardson"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Book />
                        </HamburgerMenuOption>
                        <HamburgerMenuOption
                            href="mailto:andyandy698@gmail.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Email />
                        </HamburgerMenuOption>
                        <HamburgerMenuOption
                            href="resume.pdf"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Paper />
                        </HamburgerMenuOption>
                    </>
                )}
            </HamburgerMenu>
        </HamburgerMenuContainer>
    );
};

export default MobileMenu;
