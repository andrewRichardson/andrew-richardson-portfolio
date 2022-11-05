import styled from "styled-components";

const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 100px 0;
    max-width: 900px;
    width: calc(100% - 100px);

    @media (max-width: 850px) {
        width: 100%;
    }
`;

export default SectionContainer;
