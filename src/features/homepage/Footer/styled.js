import styled from "styled-components";

export const Email = styled.h2`
    font-size: 32px;
    color: ${({theme}) => theme.color.mineShaft};
    font-weight: 900;
    margin: 0 0 24px;
`

export const Details = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.color.mineShaft};
    width: 55%;
    margin-bottom: 56px;
`