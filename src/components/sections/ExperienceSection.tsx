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

const EXPERIENCE_LIST: Experience[] = [
    {
        id: "asurion2",
        title: "Senior Software Engineer",
        company: "Asurion",
        bullets: [
            "Senior engineer on the Asurion.com team",
            "Manage the entire public-facing Asurion marketing website",
        ],
        dates: "January 2023 - Present",
    },
    {
        id: "tanium",
        title: "Software Engineer (Frontend)",
        company: "Tanium",
        bullets: [
            "Co-led a team to create customizable executive reports built with Typescript, React, Node.js, Webpack, and Go",
            "Led technical design process and created an MVP that was pitched to leadership and approved for production",
            "Co-managed team and led development from initial development to QA to production",
        ],
        dates: "February - November 2022",
    },
    {
        id: "postscript",
        title: "Frontend Engineer",
        company: "Postscript",
        bullets: [
            "Worked with 4-person design team as the sole engineer to lead a revamp of the entire UI/UX of the web application in three months",
            "Performed user & market research with the design team",
            "Managed and led development from planning, to prototyping, to development, to QA, and to production",
        ],
        dates: "June 2021 - February 2022",
    },
    {
        id: "asurion",
        title: "Software Engineer",
        company: "Asurion",
        bullets: [
            "Helped establish a team of eight engineers to build a Wi-Fi diagnostic service",
            "Introduced CI/CD and reusable code in a Lerna/Yarn monorepo to cut down duration of development cycle by up to 40%",
            "Grew the product to one of Asurion’s most profitable services",
        ],
        dates: "January 2020 - June 2021",
    },
    {
        id: "amazon",
        title: "Software Development Engineer Intern",
        company: "Amazon",
        bullets: [
            "Built an internal tool for the mobile homepage team to automate card submissions using Ruby on Rails, React, and AWS",
            "Improved the inter-team speed and quality of communication by automating a previously manual process",
        ],
        dates: "May - August 2019",
    },
    {
        id: "heal",
        title: "React Native Software Engineer",
        company: "Healthware Consortium",
        bullets: [
            "Converted an Objective-C and Swift based iOS app into a cross-platform React Native application",
            "Rewrote controller layer to be compatible with the API layer built with Enterprise Java and the SQL database",
        ],
        dates: "May 2018 - May 2019",
    },
];

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 1rem;
    margin-top: 2rem;
    min-height: 400px;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const ListLabelContainer = styled.div`
    margin-right: 1rem;

    @media (max-width: 750px) {
        width: 100%;
        margin: 0 0 2rem 0;
        padding-right: 20px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }
`;

const Label = styled.div<{ highlight?: boolean }>`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;
    height: 1.25rem;

    -webkit-box-shadow: inset 2px 0 0 0 ${lightBackground};

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

    @media (max-width: 750px) {
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 80px;
        padding: 1rem 1.5rem;
        -webkit-box-shadow: inset 0 -2px 0 0 ${lightBackground};
    }

    ${(props) =>
        props.highlight &&
        `
        code {
            color: ${highlight} !important;
        }
        background: ${lowlight};

        @media (max-width: 750px) {
            -webkit-box-shadow: inset 0 -2px 0 0 ${highlight};
        }
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

    @media (max-width: 750px) {
        display: none;
    }

    transition: transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const ExperienceSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldFadeOut, setShouldFadeOut] = useState(false);

    const changeIndex = (newIndex: number) => {
        setCurrentIndex(newIndex);
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
                            <ListLabelTab keyIndex={currentIndex} />
                            {EXPERIENCE_LIST.map((value, index) => (
                                <Label
                                    highlight={currentIndex === index}
                                    onClick={() => changeIndex(index)}
                                    key={`${value.id}`}
                                >
                                    <SectionCode>{value.company}</SectionCode>
                                </Label>
                            ))}
                        </ListLabelContainer>
                        <ExperienceSectionList
                            experience={EXPERIENCE_LIST[currentIndex]}
                            shouldFadeOut={shouldFadeOut}
                        />
                    </ListContainer>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ExperienceSection;
