import { ReactNode } from "react";
import styled from "styled-components";
import { highlight, background } from "../../utils/colors";

const StyledButton = styled.a<{ width: string; height: string }>`
    font-size: 16px;
    align-items: center;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    flex-gap: 0.25rem;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    text-align: center;
    color: ${highlight};
    -webkit-box-shadow: inset 0px 0px 0px 1px ${highlight};
    padding: 15px;

    &:hover {
        color: ${background};
        font-weight: 600;
        -webkit-box-shadow: inset 0px -50px 0px 0px ${highlight};
    }

    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

type ButtonProps = {
    children: ReactNode;
    width?: string;
    height?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({
    children,
    width = "85px",
    height = "20px",
    ...props
}: ButtonProps) => (
    <StyledButton width={width} height={height} {...props}>
        {children}
    </StyledButton>
);

export default Button;
