import styled from "styled-components";
import { darkText, highlight, lightText, normalText } from "../../utils/colors";
import IconLink from "../common/IconLink";
import { Section } from "../common/section";
import ContentDescription from "../contentful/Description";
import Title from "../contentful/Title";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const HeadlineContainer = styled.div`
    min-height: 100vh;
    height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;

    @media (max-width: 850px) {
        min-height: calc(100vh - 92px);
        height: calc(100vh - 92px);
    }
`;

const Intro = styled.span`
    font-size: clamp(35px, 7vw, 60px);
    color: ${highlight};
    font-weight: 600;
`;

const Heading = styled.h1`
    margin: 0;
    font-size: clamp(35px, 7vw, 60px);
    font-weight: 600;
    line-height: 1.1;
    color: ${lightText};

    @keyframes fade-in-headline {
        0% {
            opacity: 0%;
            transform: translateY(4rem);
        }
        70% {
            opacity: 0%;
            transform: translateY(4rem);
        }
        80% {
            opacity: 10%;
        }
        100% {
            opacity: 100%;
            transform: translateY(0);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-headline 1.5s 0s ease-out;
    }
`;

const Subheading = styled.h2`
    margin: 0;
    margin-top: 2rem;
    font-size: clamp(25px, 6vw, 50px);
    font-weight: 600;
    line-height: 1.1;
    color: ${normalText};

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-headline 1.55s 0s ease-out;
    }
`;

const Description = styled.p`
    max-width: 540px;
    margin: 0;
    margin-top: 2rem;
    font-size: 1.25rem;
    color: ${darkText};

    @media (prefers-reduced-motion: no-preference) {
        animation: fade-in-headline 1.6s 0s ease-out;
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        width: fit-content;
        color: ${highlight};
        text-decoration: none;

        &::after {
            width: 0px;
            content: "";
            display: block;
            margin: 0 auto;
            height: 2px;
            position: relative;
            bottom: 0.17rem;
            transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
        }

        &:hover::after {
            width: 100%;
            background: ${highlight};
            transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
    }
`;

const HeadlineSection = () => {
    return (
        <Section id="headline" $fadeIn={false} $align="flex-start">
            <HeadlineContainer>
                <Heading>
                    <Title
                        title="Main Title"
                        options={{
                            renderNode: {
                                [BLOCKS.PARAGRAPH]: (_: any, children: any) =>
                                    children,
                            },
                            renderMark: {
                                [MARKS.BOLD]: (children: any) => (
                                    <Intro>{children}</Intro>
                                ),
                            },
                        }}
                    />
                </Heading>
                <Subheading>
                    Software engineer;{" "}
                    <IconLink
                        href="https://reactjs.org/"
                        icon={
                            <img
                                width="auto"
                                height="35"
                                alt="React-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
                            />
                        }
                    >
                        React
                    </IconLink>{" "}
                    and{" "}
                    <IconLink
                        href="https://www.typescriptlang.org/"
                        icon={
                            <img
                                width="auto"
                                height="35"
                                alt="TypeScript-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/512px-Typescript.svg.png"
                            />
                        }
                    >
                        TypeScript
                    </IconLink>{" "}
                    connoisseur.
                </Subheading>
                <Description>
                    <ContentDescription title="Main Description" plain />
                </Description>
            </HeadlineContainer>
        </Section>
    );
};

export default HeadlineSection;
