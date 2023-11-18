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
import ExperienceSectionList from "../common/section/ExperienceSectionList";
import useContentful from "../../hooks/useContentful";

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

const Label = styled.div<{ $highlight?: boolean }>`
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
        props.$highlight &&
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

const ListLabelTab = styled.div<{ $keyIndex: number }>`
    position: absolute;
    z-index: 10;
    width: 2px;
    height: 52px;
    border-radius: 5px;
    background: ${highlight};
    transform: translateY(calc(${(props) => props.$keyIndex} * 52px));

    @media (max-width: 750px) {
        display: none;
    }

    transition: transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const ExperienceSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [should$fadeOut, setShould$fadeOut] = useState(false);

    const changeIndex = (newIndex: number) => {
        setCurrentIndex(newIndex);
        setShould$fadeOut(true);
        setTimeout(() => {
            setShould$fadeOut(false);
        }, 75);
    };

    const { content } = useContentful();

    const entries = Array.from(content.entries()).filter((value) =>
        value[0].startsWith("experience-"),
    );
    const items = entries.map((value) => value[1]);
    const workExperience = new Array(items.length);

    for (const item of items) {
        const bullets = item.fields.bullets.split("\n");
        workExperience[workExperience.length - item.fields.index - 1] = {
            company: item.fields.company,
            id: item.fields.id,
            title: item.fields.jobtitle,
            dates: item.fields.dates,
            bullets: bullets,
        };
    }

    return (
        <Section id="experience">
            <SectionContainer $maxWidth="750px">
                <SectionContent>
                    <SectionHeading $align="right"># Experience</SectionHeading>
                    <ListContainer>
                        <ListLabelContainer>
                            <ListLabelTab $keyIndex={currentIndex} />
                            {workExperience.map((value, index) => (
                                <Label
                                    $highlight={currentIndex === index}
                                    onClick={() => changeIndex(index)}
                                    key={`${value.id}`}
                                >
                                    <SectionCode>{value.company}</SectionCode>
                                </Label>
                            ))}
                        </ListLabelContainer>
                        {workExperience.length > 0 && (
                            <ExperienceSectionList
                                experience={workExperience[currentIndex]}
                                should$fadeOut={should$fadeOut}
                            />
                        )}
                    </ListContainer>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ExperienceSection;
