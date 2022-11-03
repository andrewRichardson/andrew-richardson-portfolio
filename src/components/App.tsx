import React from "react";
import styled from "styled-components";
import { background, lightText, lowlight } from "../utils/colors";
import HeadlineSection from "./sections/HeadlineSection";
import NavMenu from "./common/NavMenu";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${background};

    *::selection {
        color: ${lightText};
        background: ${lowlight};
    }
`;

const Main = styled.main`
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 150px;
    min-height: 100vh;

    @media (max-width: 1080px) {
        padding: 0 100px;
    }
`;

const App = () => {
    return (
        <Content>
            <NavMenu />
            <Main>
                <HeadlineSection />
            </Main>
        </Content>
    );
};

export default App;
