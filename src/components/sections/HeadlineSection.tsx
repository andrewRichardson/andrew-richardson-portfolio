import styled from "styled-components";
import { darkText, highlight, lightText, normalText } from "../../utils/colors";
import IconLink from "../common/IconLink";
import Link from "../common/Link";
import { Section } from "../common/section";

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
`;

const HeadlineSection = () => {
    return (
        <Section id="headline" fadeIn={false} align="flex-start">
            <HeadlineContainer>
                <Heading>
                    <Intro>Hi, I'm </Intro> Andrew Richardson.
                </Heading>
                <Subheading>
                    Frontend developer;{" "}
                    <IconLink
                        href="https://reactjs.org/"
                        icon={
                            <img
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
                        href="https://www.javascript.com/"
                        icon={
                            <img
                                height="35"
                                alt="JavaScript-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"
                            />
                        }
                    >
                        Javascript
                    </IconLink>{" "}
                    connoisseur.
                </Subheading>
                <Description>
                    I build robust, engaging products and aspire to encourage my
                    peers.&nbsp;&nbsp;Most recently, I held a Frontend Software
                    Engineer role at{" "}
                    <Link href="https://www.tanium.com">Tanium</Link>.
                </Description>
            </HeadlineContainer>
        </Section>
    );
};

export default HeadlineSection;
