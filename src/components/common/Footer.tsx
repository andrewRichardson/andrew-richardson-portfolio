import styled from "styled-components";
import { Github, LinkedIn, Email } from "../../assets";
import { footerText, lightText } from "../../utils/colors";
import packageJson from "../../../package.json";

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
`;

const FooterItem = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${footerText};
    cursor: pointer;
    text-decoration: none;

    :hover {
        svg {
            fill: ${lightText} !important;
        }
        color: ${lightText} !important;
    }
`;

const FooterIcon = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    padding: 0 0.65rem;

    svg {
        fill: ${footerText};
    }
`;

const IconGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &::before,
    &::after {
        content: "";
        position: relative;
        width: 60px;
        height: 1px;
        background: ${footerText};
    }
`;

const FooterText = styled.code`
    color: ${footerText};
    font-size: 0.75rem;
    cursor: pointer;
    text-decoration: none;
    padding: 1rem 0;
    font-style: italic;

    :hover {
        svg {
            fill: ${lightText} !important;
        }
        color: ${lightText} !important;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <IconGroup>
                <FooterItem
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.github.com/andrewrichardson"
                >
                    <FooterIcon>
                        <Github />
                    </FooterIcon>
                </FooterItem>
                <FooterItem
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/andrew-roland-richardson"
                >
                    <FooterIcon>
                        <LinkedIn />
                    </FooterIcon>
                </FooterItem>
                <FooterItem
                    rel="noopener noreferrer"
                    target="_blank"
                    href="mailto:andyandy698@gmail.com?subject=Contact - andrewrichardson.info"
                >
                    <FooterIcon>
                        <Email />
                    </FooterIcon>
                </FooterItem>
            </IconGroup>
            <FooterItem
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/andrewrichardson/andrew-richardson-portfolio"
            >
                <FooterText>
                    Designed by Andrew Richardson (v{packageJson.version})
                </FooterText>
            </FooterItem>
        </FooterContainer>
    );
};

export default Footer;
