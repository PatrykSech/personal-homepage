import styled from "styled-components";

export const CaptionElement = styled.caption`
    font-size: 12px;
    font-weight: 700;
    color: ${({theme}) => theme.color.paragraph};
    text-transform: uppercase;
    margin-bottom: 12px;
`