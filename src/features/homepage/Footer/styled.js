import styled from "styled-components";

export const Email = styled.h2`
    font-size: 32px;
    color: ${({theme}) => theme.color.title};
    font-weight: 900;
    margin: 0 0 24px;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.color.title};
    width: 55%;
    margin-bottom: 56px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 100%;
    }
`

export const FacebookIcon = styled.svg`
    padding-right: 24px;
`

export const Media = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-gap: 24px;
    margin-bottom: 110px;
`