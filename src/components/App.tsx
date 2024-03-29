import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { background, lightText, lowlight } from "../utils/colors";
import HeadlineSection from "./sections/HeadlineSection";
import { Email, Book, Info, Folder } from "../assets";
import Menu from "./common/Menu";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./common/Footer";
import ScrollPrompt from "./common/ScrollPrompt";
import ContentfulProvider from "../contexts/ContentfulContext";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background};
    min-height: 100vh;

    *::selection {
        color: ${lightText};
        background: ${lowlight};
    }
`;

const Main = styled.main`
    margin: 0 auto;
    max-width: 1600px;
    width: calc(100% - 300px);
    padding: 0 150px;
    min-height: 100%;

    @media (max-width: 1080px) {
        padding: 0 100px;
        width: calc(100% - 200px);
    }

    @media (max-width: 950px) {
        padding: 0 40px;
        width: calc(100% - 80px);
    }

    @media (max-width: 850px) {
        padding: 0 20px;
        min-height: calc(100% - 92px);
        width: calc(100% - 40px);
    }
`;

export const NAVIGATION_LIST = [
    {
        label: "# About",
        link: "#about",
        icon: Info(),
        anchor: true,
    },
    {
        label: "# Experience",
        link: "#experience",
        icon: Book(),
        anchor: true,
    },
    // {
    //     label: "# Projects",
    //     link: "#projects",
    //     icon: <Paper />,
    //     anchor: true,
    // },
    {
        label: "# Contact",
        link: "#contact",
        icon: Email(),
        anchor: true,
    },
    {
        label: "Resume ↗",
        link: "resume.pdf",
        icon: Folder(),
        highlight: true,
    },
];

const heightToHideFrom = 400;

const App = () => {
    const [$showNav, setShowNav] = useState(true);
    const [lastScrollHeight, setLastScrollHeight] = useState(0);

    const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        setLastScrollHeight(winScroll);

        if (!$showNav && winScroll < lastScrollHeight) {
            setShowNav(true);
        }

        if (winScroll > heightToHideFrom && $showNav) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    });

    return (
        <ContentfulProvider>
            <Content>
                <Menu $showNav={$showNav} navList={NAVIGATION_LIST} />
                <Main>
                    <HeadlineSection />
                    <AboutSection />
                    <ExperienceSection />
                    <ContactSection />
                </Main>
                <ScrollPrompt $showNav={$showNav} />
                <Footer />
            </Content>
        </ContentfulProvider>
    );
};

export default App;
