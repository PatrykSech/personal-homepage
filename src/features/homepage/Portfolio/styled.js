import styled from "styled-components";

export const Portfolio = styled.div`
display: grid;
align-items: center;
justify-items: center;
`
export const Icon = styled.div`
    margin-bottom: 13px;
`

export const InfoPortoflio = styled.p`
    color: ${({theme}) => theme.color.mineShaft};
    margin-top: 8px;
`

export const SubHederPortfolio = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({theme}) => theme.color.mineShaft};
    margin: 0;
`