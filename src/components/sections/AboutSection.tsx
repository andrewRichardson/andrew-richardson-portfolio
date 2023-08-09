import styled from "styled-components";
import { background } from "../../utils/colors";
import SectionList from "../common/List";
import {
    SectionContainer,
    SectionContent,
    SectionHeading,
    Section,
} from "../common/section";
import Title from "../contentful/Title";
import Description from "../contentful/Description";
import useContentful from "../../hooks/useContentful";
import { getEntryKey } from "../../contexts/ContentfulContext";

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

    -webkit-box-shadow:
        0 0 0 5px ${background},
        0 0 0 6px #555;

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
    const {content} = useContentful();

    const langs = content.get(getEntryKey('skills', 'Languages & Libraries'));
    const design = content.get(getEntryKey('skills', 'Design'));
    const infra = content.get(getEntryKey('skills', 'Infra & Testing'));

    const langsSkill = {
        title: langs?.fields?.title ?? '',
        list: langs?.fields?.skills ?? ''
    }
    const designSkill = {
        title: design?.fields?.title ?? '',
        list: design?.fields?.skills ?? ''
    }
    const infraSkill = {
        title: infra?.fields?.title ?? '',
        list: infra?.fields?.skills ?? ''
    }
    
    const skills = [
        langsSkill,
        designSkill,
        infraSkill
    ];

    return (
        <Section id="about">
            <SectionContainer>
                <AboutContent>
                    <SectionHeading><Title title="About Me" /></SectionHeading>
                    <Description title="About Me" />
                    {/* <SectionList list={SKILLS} columnSize={3} /> */}
                    {/* <SectionList list={skills} columnSize={3} /> */}
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
