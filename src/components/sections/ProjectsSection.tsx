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
                        <code>Postscript Design System</code>
                    </SectionDescription>
                    <SectionDescription>
                        <code>Robot Vacuum Simulator</code>
                    </SectionDescription>
                    <SectionDescription>
                        <code>Portfolio</code>
                    </SectionDescription>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};

export default ProjectsSection;
