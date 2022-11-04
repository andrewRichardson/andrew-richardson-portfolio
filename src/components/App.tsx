import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { background, lightText, lowlight } from "../utils/colors";
import HeadlineSection from "./sections/HeadlineSection";
import NavMenu from "./common/NavMenu";
import AboutSection from "./sections/AboutSection";

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
    padding: 0 150px;
    min-height: 100%;

    @media (max-width: 1080px) {
        padding: 0 100px;
    }

    @media (max-width: 950px) {
        padding: 0 40px;
    }

    @media (max-width: 850px) {
        padding: 0 20px;
        min-height: calc(100% - 92px);
    }
`;

const App = () => {
    const [showNav, setShowNav] = useState(true);

    const listenToScroll = () => {
        let heightToHideFrom = 400;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            showNav && setShowNav(false);
        } else {
            setShowNav(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    });

    return (
        <Content>
            <NavMenu showNav={showNav} />
            <Main>
                <HeadlineSection />
                <AboutSection />
                {/* <ExperienceSection /> */}
            </Main>
        </Content>
    );
};

export default App;
