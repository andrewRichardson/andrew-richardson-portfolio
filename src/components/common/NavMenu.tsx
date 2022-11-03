import styled from "styled-components";
import { Logo, Email, Book, Info, Paper } from "../../assets";
import { highlight, background, darkText } from "../../utils/colors";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    padding: 0 30px;
    background: transparent;

    @media (max-width: 850px) {
        margin: 0;
        padding: 1rem;
    }
`;

const LogoContainer = styled.a<{ size: number }>`
    display: flex;
    justify-content: center;
    margin: 30px 10px 10px 10px;
    padding: 10px;
    font-size: ${(props) => props.size}px;

    svg {
        stroke: none;
        fill: ${highlight};
        width: 1em;
        height: 1em;
    }

    @media (max-width: 850px) {
        margin: 0;
        font-size: ${(props) => props.size * 1.5}px !important;

        &:hover {
            -webkit-box-shadow: inset 0px ${(props) => props.size * -2}px 0px
                0px ${highlight} !important;
        }
    }

    #logo-cursor {
        animation: blink 1s infinite 5s ease-in-out;
    }

    @keyframes blink {
        0% {
            fill: ${background};
        }
        50% {
            fill: ${highlight};
        }
        100% {
            fill: ${background};
        }
    }

    @media (min-width: 850px), (prefers-reduced-motion: no-preference) {
        animation: wiggle 3s 0s;
    }

    @media (max-width: 850px), (prefers-reduced-motion: no-preference) {
        animation: wiggle 1.5s 0s;
    }

    @keyframes wiggle {
        0% {
            opacity: 0;
            transform: rotate(0deg);
        }
        50% {
            opacity: 0;
            transform: rotate(0deg);
        }
        80% {
            opacity: 100%;
            transform: rotate(0deg);
        }
        85% {
            transform: rotate(10deg);
        }
        90% {
            transform: scale(150%);
        }
        95% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    &:hover {
        -webkit-box-shadow: inset 0px ${(props) => -props.size}px 0px 0px
            ${highlight};
        svg {
            fill: ${background};

            #logo-cursor {
                fill: ${background} !important;
            }
        }
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const NavOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 40px;
    margin-right: 40px;

    @keyframes fade-in-nav {
        0% {
            transform: translateY(-1rem);
            opacity: 0%;
        }
        50% {
            transform: translateY(0);
            opacity: 50%;
        }
        100% {
            transform: translateY(0);
            opacity: 100%;
        }
    }

    @media (max-width: 850px) {
        display: none;
    }
`;

const NavOption = styled.a`
    height: 20px;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    color: ${darkText};
    text-decoration: none;

    &:hover {
        color: ${highlight};
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-nav 1s 0s ease-out;
    }
`;

const NavOptionHighlighted = styled(NavOption)`
    display: flex;
    justify-content: space-around;
    flex-gap: 0.25rem;
    width: 85px;
    text-align: center;
    color: ${highlight};
    -webkit-box-shadow: inset 0px 0px 0px 1px ${highlight};
    padding: 15px;

    &:hover {
        color: ${background};
        font-weight: bold;
        -webkit-box-shadow: inset 0px -50px 0px 0px ${highlight};
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

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

const NavMenu = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const matches = useMediaQuery("min-width: 850px");

    const wrapperRef: any = useRef(null);
    useOutsideAlerter(wrapperRef, () => setIsBurgerMenuOpen(false));

    useEffect(() => {
        if (matches) setIsBurgerMenuOpen(false);
    }, [matches]);

    return (
        <NavContainer>
            <LogoContainer href="/" size={40}>
                <Logo />
            </LogoContainer>
            <NavOptions>
                <NavOption href="/"># About Me</NavOption>
                <NavOption
                    href="https://www.linkedin.com/in/andrew-roland-richardson/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    # Experience
                </NavOption>
                <NavOption
                    href="https://github.com/andrewRichardson"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    # Projects
                </NavOption>
                <NavOption
                    href="mailto:andyandy698@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    # Contact
                </NavOption>
                <NavOptionHighlighted
                    href="resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Resume ↗
                </NavOptionHighlighted>
            </NavOptions>
            <HamburgerMenuContainer isOpen={isBurgerMenuOpen} ref={wrapperRef}>
                <HamburgerMenu isOpen={isBurgerMenuOpen}>
                    <HamburgerMenuOption
                        isPlaceholder
                        isOpen={isBurgerMenuOpen}
                    >
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
        </NavContainer>
    );
};

export default NavMenu;
