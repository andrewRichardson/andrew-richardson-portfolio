import styled from "styled-components";
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

const ContactSection = () => {
    return (
        <Section id="contact">
            <SectionContainer>
                <SectionContent>
                    <SectionHeading align="right"># Contact Me</SectionHeading>
                    <SectionDescription>
                        I'm actively looking for work! For job inquiries or
                        other general questions, shoot me an email!
                    </SectionDescription>
                    <ContactButton
                        href="mailto:andyandy698@gmail.com"
                        width="125px"
                    >
                        <code>@ Email</code>
                    </ContactButton>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ContactSection;
