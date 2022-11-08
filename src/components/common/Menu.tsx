import { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "../../assets";
import { highlight, background, normalText } from "../../utils/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import { NavigationList, getLinkProps } from "../../utils/constants";
import Button from "./Button";

const NavContainer = styled.nav<{ showNav: boolean }>`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: calc(100% - 60px);
    margin: 0;
    padding: 0 30px;
    background: ${background};
    z-index: 1000;
    -webkit-box-shadow: 0px 10px 30px -10px ${background};

    ${(props) =>
        !props.showNav &&
        `
        transform: translateY(-100px);
    `}

    @media (max-width: 850px) {
        width: calc(100% - 32px);
        margin: 0;
        padding: 1rem;
        position: relative;
        -webkit-box-shadow: none;
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

    #logo-cursor {
        animation: blink 1s infinite 4s ease-in-out;
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
        animation: wiggle 4s 0s;
    }

    @media (max-width: 850px), (prefers-reduced-motion: no-preference) {
        animation: wiggle 3s 0s;
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

const NavOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;

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
`;

const NavOption = styled.a`
    height: 20px;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    color: ${normalText};
    text-decoration: none;

    &:hover {
        color: ${highlight};
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-nav 1s 0s ease-out;
    }
`;

const NavOptionHighlighted = styled(Button)`
    width: 85px !important;
    height: 20px !important;
    margin-left: 40px;

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-nav 1s 0s ease-out;
    }
`;

type NavMenuProps = {
    showNav: boolean;
    navList: NavigationList;
};

const Menu = ({ showNav, navList }: NavMenuProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 850px)");

    useEffect(() => {
        if (!isMobile) setIsMobileMenuOpen(false);
    }, [isMobile]);

    return (
        <NavContainer showNav={showNav || isMobile}>
            <LogoContainer href="#" size={40}>
                <Logo />
            </LogoContainer>
            {!isMobile ? (
                <NavOptions>
                    {navList.map((value, index) =>
                        value?.highlight ? (
                            <NavOptionHighlighted
                                href={value.link}
                                key={`${value.label}-${index}`}
                                {...getLinkProps(value.anchor)}
                            >
                                {value.label}
                            </NavOptionHighlighted>
                        ) : (
                            <NavOption
                                href={value.link}
                                key={`${value.label}-${index}`}
                                {...getLinkProps(value.anchor)}
                            >
                                {value.label}
                            </NavOption>
                        )
                    )}
                </NavOptions>
            ) : (
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    setIsOpen={setIsMobileMenuOpen}
                    navList={navList}
                />
            )}
        </NavContainer>
    );
};

export default Menu;
