import styled from "styled-components";
import { lightText, darkText } from "../../utils/colors";
// import Section from "./Section";

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 100px 0;
    max-width: 900px;
`;

const ExperienceContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 40px 0 0;

    @media (max-width: 850px) {
        margin: 0;
    }
`;

const Heading = styled.h1`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 0;
    width: 100%;
    font-size: clamp(26px, 7vw, 35px);
    white-space: nowrap;
    font-weight: 600;
    line-height: 1.1;
    color: ${lightText};

    ::after {
        content: "";
        position: relative;
        display: block;
        top: 0;
        margin-left: 20px;
        width: 55%;
        height: 1px;
        background: ${darkText};
    }
`;

const Description = styled.p`
    max-width: 540px;
    margin: 0;
    margin-top: 2rem;
    font-size: 1.15rem;
    color: ${darkText};
`;

const ExperienceSection = () => {
    return (
        // <Section id="experience">
        <ExperienceContainer>
            <ExperienceContent>
                <Heading># Experience</Heading>
                <Description>Tanium</Description>
                <Description>Postscript</Description>
                <Description>Asurion</Description>
                <Description>Amazon</Description>
                <Description>HEAL</Description>
            </ExperienceContent>
        </ExperienceContainer>
        // </Section>
    );
};

export default ExperienceSection;
