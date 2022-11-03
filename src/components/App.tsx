import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo";
import {
    background,
    highlight,
    lightText,
    darkText,
    lowlight,
} from "../utils/colors";

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${background};

    *::selection {
        color: ${lightText};
        background: ${lowlight};
    }
`;

const HeadlineContainer = styled.section`
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 150px;
    min-height: 100vh;
    width: 100%;
`;

const Headline = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
    max-width: 1000px;
    margin: 0 auto;
`;

const LogoContainer = styled.a`
    display: flex;
    justify-content: center;
    margin: 20px 10px 10px 10px;
    padding: 10px;

    svg {
        stroke: none;
        fill: ${highlight};
        width: 40px;
        height: 40px;
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

    @media (prefers-reduced-motion: no-preference) {
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

const Intro = styled.span`
    font-size: clamp(45px, 8vw, 60px);
    color: ${highlight};
    font-weight: 600;
`;

const Heading = styled.h1`
    margin: 0;
    font-size: clamp(45px, 8vw, 60px);
    font-weight: 600;
    line-height: 1.1;
    color: ${lightText};

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-heading 1.5s 0s ease-out;
    }

    @keyframes fade-in-heading {
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
`;

const Subheading = styled.h2`
    margin: 0;
    margin-top: 1.5rem;
    font-size: clamp(35px, 8vw, 50px);
    font-weight: 600;
    line-height: 1.1;
    color: ${darkText};

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-subheading 1.55s 0s ease-out;
    }

    @keyframes fade-in-subheading {
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
`;

const Description = styled.p`
    max-width: 540px;
    margin: 0;
    margin-top: 1.75rem;
    font-size: 1.25rem;
    color: ${darkText};

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-desc 1.6s 0s ease-out;
    }

    @keyframes fade-in-desc {
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
`;

const NavMenu = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0 30px;
    background: transparent;
`;

const Link = styled.a`
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
    }
`;

const BubbleLink = styled(Link)`
    color: ${lightText};
    transition: all 0.25s ease-in-out;

    &:hover::after {
        background: ${lightText};
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

const NavOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    margin-right: 40px;

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-nav 0.75s 0s ease-out;
    }

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
    display: flex:
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    color: ${darkText};
    text-decoration: none;

    &:hover {
        color: ${highlight};
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

const App = () => {
    return (
        <MainContent>
            <NavMenu>
                <LogoContainer href="/">
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
            </NavMenu>
            <HeadlineContainer id="headline">
                <Headline>
                    <Heading>
                        <Intro>Hi, I'm </Intro> Andrew Richardson.
                    </Heading>
                    <Subheading>
                        Frontend developer;{" "}
                        <BubbleLink
                            href="https://reactjs.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                height="35"
                                alt="React-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
                            />{" "}
                            React
                        </BubbleLink>{" "}
                        and{" "}
                        <BubbleLink
                            href="https://www.javascript.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                height="35"
                                alt="JavaScript-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"
                            />{" "}
                            Javascript
                        </BubbleLink>{" "}
                        connoisseur.
                    </Subheading>
                    <Description>
                        I build robust, engaging products and aspire to
                        encourage my peers.&nbsp;&nbsp;Most recently, I held a
                        Frontend Software Engineer role at{" "}
                        <Link
                            href="https://www.tanium.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Tanium
                        </Link>
                        .
                    </Description>
                </Headline>
            </HeadlineContainer>
        </MainContent>
    );
};

export default App;
