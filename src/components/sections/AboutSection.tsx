import styled from "styled-components";
import { background } from "../../utils/colors";
import List from "../common/List";
import {
    SectionContainer,
    SectionContent,
    SectionDescription,
    SectionHeading,
    Section,
} from "../common/section";

const AboutContent = styled(SectionContent)`
    margin: 0 40px 0 0;

    @media (max-width: 850px) {
        margin: 0;
    }
`;

const Headshot = styled.img`
    margin: 70px 0 0 0;
    width: 300px;
    height: 300px;
    object-fit: cover;

    -webkit-box-shadow: 0 0 0 5px ${background}, 0 0 0 6px #555;

    @media (max-width: 850px) {
        display: none;
    }
`;

const SKILLS = [
    {
        title: "Languages & Libraries",
        list: ["React", "JavaScript (ES6+)", "TypeScript", "CSS", "Node.js"],
    },
    {
        title: "Design",
        list: ["Storybook", "Figma", "Photoshop"],
    },
    {
        title: "Infra & Testing",
        list: ["GitHub Actions", "Jest", "Cypress", "Webpack", "Husky"],
    },
];

const AboutSection = () => {
    return (
        <Section id="about">
            <SectionContainer>
                <AboutContent>
                    <SectionHeading># About me</SectionHeading>
                    <SectionDescription>
                        I am a product, leadership, and customer focused
                        Software Engineer with a passion for making
                        things.
                    </SectionDescription>
                    <SectionDescription>
                        I have four total years of experience as an engineer; I
                        have three years experience working on Frontend/Full
                        Stack development with an additional years experience
                        working on Mobile App development.
                    </SectionDescription>
                    <SectionDescription>
                        Recently, the technologies and frameworks I have been
                        using the most are:
                    </SectionDescription>
                    <List list={SKILLS} columnSize={5} />
                </AboutContent>
                <Headshot
                    src={process.env.PUBLIC_URL + "/headshot.jpg"}
                    alt="headshot"
                />
            </SectionContainer>
        </Section>
    );
};

export default AboutSection;
