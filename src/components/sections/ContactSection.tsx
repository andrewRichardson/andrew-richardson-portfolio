import styled from "styled-components";
import { lightText } from "../../utils/colors";
import Button from "../common/Button";
import {
    SectionContainer,
    SectionContent,
    SectionDescription,
    SectionHeading,
    Section,
} from "../common/section";

const ContactButton = styled(Button)`
    margin-top: 2rem;
`;

const StyledSectionContent = styled(SectionContent)`
    align-items: center;
`;

const StyledSectionDescription = styled(SectionDescription)`
    font-size: 1.15rem;
    line-height: 1.5;
    text-align: center;
`;

const LightText = styled.span`
    color: ${lightText};
`;

const ContactSection = () => {
    return (
        <Section id="contact">
            <SectionContainer>
                <StyledSectionContent>
                    <SectionHeading align="center">
                        # How to Reach Me
                    </SectionHeading>
                    <StyledSectionDescription>
                        <LightText>
                            I am always eager to discuss anything software or
                            product!
                        </LightText>
                        &nbsp;&nbsp;Please send any job inquiries to my email
                        below. Feel free to ask any and all general questions as
                        well!
                    </StyledSectionDescription>
                    <ContactButton
                        href="mailto:andyandy698@gmail.com?subject=Contact - andrewrichardson.info"
                        target="_top"
                        width="125px"
                    >
                        <code>Contact</code>
                    </ContactButton>
                </StyledSectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ContactSection;
