import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const highlight = "#ff8011";
// const highlightLight = "rgba(255, 128, 17, 0.2)";
const lightText = "#dde4f7";
const darkText = "#9ca6c5";
const background = "#1e293a";

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${background};
`;

const HeadlineContainer = styled.section`
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 150px;
    min-height: 100vh;
    width: 100%;

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in2 3s 0s ease-out;
    }

    @keyframes fade-in2 {
        0% {
            opacity: 0%;
        }
        33% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }
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

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in3 3s 0s ease-out;
    }

    @keyframes fade-in3 {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    &:hover {
        background: ${highlight};
        svg {
            fill: ${background};
        }
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const Intro = styled.code`
    margin: 0 0 1.5rem 0.5rem;
    color: ${highlight};
    font-size: clamp(1rem, 5vw, 1.25rem);
    line-height: 1.1;
    font-weight: 400;
`;

const Heading = styled.h1`
    margin: 0;
    font-size: clamp(45px, 8vw, 70px);
    font-weight: 600;
    line-height: 1.1;
    color: ${lightText};
`;

const Subheading = styled.h2`
    margin: 0;
    margin-top: 0.625rem;
    font-size: clamp(35px, 8vw, 55px);
    font-weight: 600;
    line-height: 1.1;
    color: ${darkText};
`;

const Description = styled.p`
    margin: 0;
    margin-top: 1.75rem;
    font-size: 1.5rem;
    color: ${darkText};
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

const NavOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    margin-right: 40px;

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in 1s 0s ease-out;
    }

    @keyframes fade-in {
        0% {
            margin-top: -50%;
            opacity: 0%;
        }
        50% {
            margin-top: 20px;
            opacity: 50%;
        }
        100% {
            margin-top: 20px;
            opacity: 100%;
        }
    }
`;

const NavOption = styled.a`
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
    color: ${highlight};
    -webkit-box-shadow: inset 0px 0px 0px 1px ${highlight};
    // border-radius: 5px;
    padding: 15px;

    &:hover {
        color: ${background};
        font-weight: bold;
        background: ${highlight};
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const App = () => {
    return (
        <MainContent>
            <NavMenu>
                <LogoContainer href="#">
                    <Logo />
                </LogoContainer>
                <NavOptions>
                    <NavOption
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        About Me
                    </NavOption>
                    <NavOption
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Experience
                    </NavOption>
                    <NavOption
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Projects
                    </NavOption>
                    <NavOption
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Contact
                    </NavOption>
                    <NavOptionHighlighted
                        href="/resume.pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Resume
                    </NavOptionHighlighted>
                </NavOptions>
            </NavMenu>
            <HeadlineContainer id="headline">
                <Headline>
                    <Intro>Hi, my name is</Intro>
                    <Heading>Andrew Richardson.</Heading>
                    <Subheading>
                        Frontend developer, React expert, and Javascript
                        extraordinaire.
                    </Subheading>
                    <Description>
                        I build engaging products and inspire those around me.
                        Most recently, I held a Frontend Software Engineer role
                        at{" "}
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
