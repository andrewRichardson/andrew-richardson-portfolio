import styled from "styled-components";
import { lightText, darkText } from "../../utils/colors";
import List from "../common/List";
import Section from "./Section";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 100px 0;
    max-width: 900px;
`;

const AboutContent = styled.div`
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

const Headshot = styled.img`
    margin: 70px 0 0 0;
    width: 300px;
    height: 300px;
    object-fit: cover;

    @media (max-width: 850px) {
        display: none;
    }
`;

const SKILLS = [
    {
        title: "Languages",
        list: ["React", "JavaScript (ES6+)", "TypeScript", "Node.js"],
    },
    {
        title: "Design",
        list: ["Storybook", "Figma"],
    },
    {
        title: "Infra & Testing",
        list: ["GitHub Actions", "Jest", "Cypress"],
    },
];

const AboutSection = () => {
    return (
        <Section id="about">
            <AboutContainer>
                <AboutContent>
                    <Heading># About me</Heading>
                    <Description>
                        I am a product, leadership, and customer focused
                        Frontend Software Engineer with a passion for making
                        things.
                    </Description>
                    <Description>
                        I have four total years of experience as an engineer; I
                        have three years experience working on Frontend
                        development with an additional years experience working
                        on Mobile Apps and true Full Stack development.
                    </Description>
                    <Description>
                        Recently, the technologies and frameworks I have been
                        using the most are:
                    </Description>
                    <List list={SKILLS} columnSize={5} />
                </AboutContent>
                <Headshot
                    src={process.env.PUBLIC_URL + "/headshot.jpg"}
                    alt="headshot"
                />
            </AboutContainer>
        </Section>
    );
};

export default AboutSection;
