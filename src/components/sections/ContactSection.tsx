import styled from "styled-components";
import Button from "../contentful/Button";
import {
    SectionContainer,
    SectionContent,
    SectionDescription,
    SectionHeading,
    Section,
} from "../common/section";
import Title from "../contentful/Title";
import ContentDescription from "../contentful/Description";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { lightText } from "../../utils/colors";

const ContactButton = styled.div`
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
                    <SectionHeading $align="center">
                        <Title title="How to Reach Me" />
                    </SectionHeading>
                    <StyledSectionDescription>
                        <ContentDescription
                            title="How to Reach Me"
                            options={{
                                renderNode: {
                                    [BLOCKS.PARAGRAPH]: (
                                        _: any,
                                        children: any,
                                    ) => children,
                                },
                                renderMark: {
                                    [MARKS.BOLD]: (children: any) => (
                                        <LightText>{children}</LightText>
                                    ),
                                },
                            }}
                        />
                    </StyledSectionDescription>
                    <ContactButton>
                        <Button title="Contact" />
                    </ContactButton>
                </StyledSectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ContactSection;
