import { Divide as MobileMenuButton } from "hamburger-react";
import { useRef, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { background, highlight } from "../../utils/colors";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { NavigationList, getLinkProps } from "../../utils/constants";

const MobileMenuContainer = styled.div<{ isOpen?: boolean }>`
    transform: translate(0, 0);
    font-size: 360px;
    width: 60px;

    @media (min-width: 850px) {
        display: none;
    }

    @keyframes fade-in-hamburger {
        0% {
            opacity: 0%;
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

const MobileMenuOptions = styled.div<{ isOpen?: boolean }>`
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

const MobileMenuOption = styled.a<{
    isPlaceholder?: boolean;
    isOpen?: boolean;
}>`
    font-size: 16px;
    padding: 20px;
    width: 20px;
    height: 20px;

    ${(props) =>
        props.isPlaceholder &&
        `
        padding: 0;
        width: 60px;
        height: 60px;
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
        }setisOpen
    }

    * {
        transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
`;

type MobileMenuProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    navList: NavigationList;
};

const MobileMenu = ({ isOpen, setIsOpen, navList }: MobileMenuProps) => {
    const wrapperRef: any = useRef(null);
    useOutsideAlerter(wrapperRef, () => setIsOpen(false));

    return (
        <MobileMenuContainer isOpen={isOpen} ref={wrapperRef}>
            <MobileMenuOptions isOpen={isOpen}>
                <MobileMenuOption isPlaceholder isOpen={isOpen}>
                    <MobileMenuButton
                        color={highlight}
                        toggled={isOpen}
                        toggle={setIsOpen}
                        duration={0.25}
                    />
                </MobileMenuOption>
                {isOpen &&
                    navList.map((value, index) => (
                        <MobileMenuOption
                            href={value.link}
                            key={`${value.label}-${index}`}
                            {...getLinkProps(value.anchor)}
                        >
                            {value.icon}
                        </MobileMenuOption>
                    ))}
            </MobileMenuOptions>
        </MobileMenuContainer>
    );
};

export default MobileMenu;
