import styled from "styled-components";
import { darkText, highlight, lightText } from "../../../utils/colors";

const List = styled.ul`
    padding: 0 40px 0 0;
    margin: 1rem 0 0 0;
    opacity: 100%;

    @media (max-width: 850px) {
        padding: 0 15px 0 0;
    }
`;

const ListItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin: 0 0 20px 0;
    list-style: none;
    font-size: 1.05rem;
    font-weight: 400;
    color: ${darkText};

    ::before {
        color: ${highlight};
        content: ">";
        position: absolute;
        left: 0px;
        line-height: 1.25rem;
    }
`;

const ListTitle = styled.h2`
    margin: 0 0 0.5rem 0;
    font-size: 1.35rem;
    font-weight: 600;
    color: ${lightText};
`;

const ListDates = styled.code`
    margin: 0;
    font-size: 1rem;
    color: ${darkText};
`;

const ListCompany = styled.span`
    color: ${highlight};
`;

const AnimatedExperienceContent = styled.div<{
    fadeOut?: boolean;
}>`
    @keyframes fade-in-exp-list {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    @keyframes fade-out-exp-list {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        animation-name: fade-in-exp-list;
        animation-delay: 0s;
        animation-duration: 0.75s;
        animation-timing-function: ease-in-out;
    }

    ${(props) =>
        props.fadeOut &&
        `
        opacity: 0%;

        @media (prefers-reduced-motion: no-preference) {
            animation-name: fade-out-exp-list;
            animation-delay: 0s;
            animation-duration: 0.75s;
            animation-timing-function: ease-in-out;
        }
    `}
`;

export type Experience = {
    title: string;
    company: string;
    bullets: string[];
    dates: string;
};

export type ExperienceSectionListProps = {
    experience: Experience;
    shouldFadeOut?: boolean;
};

const ExperienceSectionList = ({
    experience,
    shouldFadeOut,
}: ExperienceSectionListProps) => {
    return (
        <AnimatedExperienceContent fadeOut={shouldFadeOut}>
            <ListTitle>
                {experience.title}{" "}
                <ListCompany>@ {experience.company}</ListCompany>
            </ListTitle>
            <ListDates>{experience.dates}</ListDates>
            <List>
                {experience.bullets.map((value) => (
                    <ListItem key={value}>{value}</ListItem>
                ))}
            </List>
        </AnimatedExperienceContent>
    );
};

export default ExperienceSectionList;
