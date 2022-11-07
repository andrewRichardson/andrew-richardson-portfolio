import {
    SectionContainer,
    SectionContent,
    SectionDescription,
    SectionHeading,
    Section,
} from "../common/section";

const ProjectsSection = () => {
    return (
        <Section id="projects">
            <SectionContainer>
                <SectionContent>
                    <SectionHeading># Projects</SectionHeading>
                    <SectionDescription>
                        <code>Emoji Design System @ Postscript</code>
                    </SectionDescription>
                    <SectionDescription>
                        <code>Frontend Guild @ Postscript & Asurion</code>
                    </SectionDescription>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ProjectsSection;
