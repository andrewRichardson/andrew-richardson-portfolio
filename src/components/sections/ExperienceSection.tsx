import { useState } from "react";
import styled from "styled-components";
import { lowlight, highlight, lightBackground } from "../../utils/colors";
import {
    SectionContainer,
    SectionContent,
    SectionCode,
    SectionHeading,
    Section,
} from "../common/section";
import ExperienceSectionList, {
    Experience,
} from "../common/section/ExperienceSectionList";

const EXPERIENCE_LIST: Record<string, Experience> = {
    tanium: {
        title: "Software Engineer (Frontend)",
        company: "Tanium",
        bullets: [
            "Co-led a team to create customizable executive reports built with Typescript, React, Node.js, Webpack, and Go",
            "Led technical design process and created an MVP that was pitched to leadership and approved for production",
            "Co-managed team and led development from initial development to QA to production",
        ],
        dates: "February - November 2022",
    },
    postscript: {
        title: "Frontend Engineer",
        company: "Postscript",
        bullets: [
            "Worked with 4-person design team as the sole engineer to lead a revamp of the entire UI/UX of the web application in three months",
            "Performed user & market research with the design team",
            "Managed and led development from planning, to prototyping, to development, to QA, and to production",
        ],
        dates: "June 2021 - February 2022",
    },
    asurion: {
        title: "Full Stack Software Engineer",
        company: "Asurion",
        bullets: [
            "Helped establish a team of eight engineers to build a Wi-Fi diagnostic service",
            "Introduced CI/CD and reusable code in a Lerna/Yarn monorepo to cut down duration of development cycle by up to 40%",
            "Grew the product to one of Asurion’s most profitable services",
        ],
        dates: "January 2020 - June 2021",
    },
    amazon: {
        title: "Software Development Engineer Intern",
        company: "Amazon",
        bullets: [
            "Built an internal tool for the mobile homepage team to automate card submissions using Ruby on Rails, React, and AWS",
            "Improved the inter-team speed and quality of communication by automating a previously manual process",
        ],
        dates: "May - August 2019",
    },
    heal: {
        title: "React Native Software Engineer",
        company: "Healthware Consortium",
        bullets: [
            "Converted an Objective-C and Swift based iOS app into a cross-platform React Native application",
            "Rewrote controller layer to be compatible with the API layer built with Enterprise Java and the SQL database",
        ],
        dates: "May 2018 - May 2019",
    },
};

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 1rem;
    margin-top: 2rem;
`;

const ListLabelContainer = styled.div`
    display: block;
    margin-right: 1rem;
`;

const Label = styled.div<{ highlight?: boolean }>`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;
    height: 1.25rem;

    box-shadow: inset 2px 0 0 0 ${lightBackground};

    code {
        pointer-events: none;
        margin-top: 0 !important;
        font-size: 0.9rem;
    }

    :hover {
        code {
            color: ${highlight} !important;
        }
        background: ${lowlight};
    }

    ${(props) =>
        props.highlight &&
        `
        code {
            color: ${highlight} !important;
        }
        background: ${lowlight};
    `}

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const ListLabelTab = styled.div<{ keyIndex: number }>`
    position: absolute;
    z-index: 10;
    width: 2px;
    height: 52px;
    border-radius: 5px;
    background: ${highlight};
    transform: translateY(calc(${(props) => props.keyIndex} * 52px));

    transition: transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const ExperienceSection = () => {
    const [currentKey, setCurrentKey] = useState("tanium");
    const [shouldFadeOut, setShouldFadeOut] = useState(false);

    const changeKey = (newKey: string) => {
        setCurrentKey(newKey);
        setShouldFadeOut(true);
        setTimeout(() => {
            setShouldFadeOut(false);
        }, 75);
    };

    return (
        <Section id="experience">
            <SectionContainer maxWidth="750px">
                <SectionContent>
                    <SectionHeading align="right"># Experience</SectionHeading>
                    <ListContainer>
                        <ListLabelContainer>
                            <ListLabelTab
                                keyIndex={Object.keys(EXPERIENCE_LIST).indexOf(
                                    currentKey
                                )}
                            />
                            <Label
                                highlight={currentKey === "tanium"}
                                onClick={() => changeKey("tanium")}
                            >
                                <SectionCode>Tanium</SectionCode>
                            </Label>
                            <Label
                                highlight={currentKey === "postscript"}
                                onClick={() => changeKey("postscript")}
                            >
                                <SectionCode>Postscript</SectionCode>
                            </Label>
                            <Label
                                highlight={currentKey === "asurion"}
                                onClick={() => changeKey("asurion")}
                            >
                                <SectionCode>Asurion</SectionCode>
                            </Label>
                            <Label
                                highlight={currentKey === "amazon"}
                                onClick={() => changeKey("amazon")}
                            >
                                <SectionCode>Amazon</SectionCode>
                            </Label>
                            <Label
                                highlight={currentKey === "heal"}
                                onClick={() => changeKey("heal")}
                            >
                                <SectionCode>Healthware Consortium</SectionCode>
                            </Label>
                        </ListLabelContainer>
                        <ExperienceSectionList
                            experience={EXPERIENCE_LIST[currentKey]}
                            shouldFadeOut={shouldFadeOut}
                        />
                    </ListContainer>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ExperienceSection;
