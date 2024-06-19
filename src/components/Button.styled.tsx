import styled, { css } from "styled-components";
import {myTheme} from "./Styles/Theme.styled";

type ButtonStyleProps = {
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: string;
    textColor?: string;
    typeBtn?: "more" | "save";
};

export const CardButton = styled.button<ButtonStyleProps>`
    background-color: ${props => props.color || "#4E71FE"};
    width: 86px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px;
    font-size: ${(props) => props.fontSize || "0.8rem"};
    font-family: ${(props)=>props.fontFamily || "Inter"};
    font-weight: ${(props)=>props.fontWeight || "700"};
    line-height: ${(props) => props.lineHeight || "normal"};
    color: ${(props) =>props.textColor || "#FFF"};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    ${props => props.typeBtn === "more" && css<ButtonStyleProps>`
        background-color:${myTheme.colors.bluesecondary};
        color:${myTheme.colors.primary};
        border-color: ${myTheme.colors.bluesecondary};
        
        &:active {
            background-color: black;
        }
    `}
    
    ${props => props.typeBtn === "save" && css<ButtonStyleProps>`
    background-color:${myTheme.colors.primary};
    color:${myTheme.colors.bluesecondary};
        border-color: ${myTheme.colors.bluesecondary};
        
        &:active {
            background-color: red;
        }
    `}
`;
