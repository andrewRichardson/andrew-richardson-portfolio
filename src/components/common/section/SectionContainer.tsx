import styled from "styled-components";

const Container = styled.div<{ $maxWidth: string }>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 100px 0;
    max-width: ${(props) => props.$maxWidth};
    width: calc(100% - 100px);

    @media (max-width: 850px) {
        width: 100%;
    }
`;

type SectionContainerProps = {
    $maxWidth?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SectionContainer = ({
    $maxWidth = "900px",
    ...props
}: SectionContainerProps) => <Container $maxWidth={$maxWidth} {...props} />;

export default SectionContainer;
