import {
    SectionContainer,
    SectionContent,
    SectionDescription,
    SectionHeading,
    Section,
} from "../common/section";

const ExperienceSection = () => {
    return (
        <Section id="experience">
            <SectionContainer>
                <SectionContent>
                    <SectionHeading align="right"># Experience</SectionHeading>
                    <SectionDescription>Tanium</SectionDescription>
                    <SectionDescription>Postscript</SectionDescription>
                    <SectionDescription>Asurion</SectionDescription>
                    <SectionDescription>Amazon</SectionDescription>
                    <SectionDescription>HEAL</SectionDescription>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ExperienceSection;
