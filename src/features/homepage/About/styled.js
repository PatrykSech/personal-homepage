import styled from "styled-components";

export const Caption = styled.caption`
    font-size: 12px;
    font-weight: 700;
    color: ${({theme}) => theme.color.paragraph};
    text-transform: uppercase;
    margin-bottom: 12px;
`

export const Header = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin: 0 0 35px;
    color: ${({theme}) => theme.color.title}
`

export const Paragraph = styled.h1`
    font-weight: 400;
    font-size: 20px;
    color: ${({theme}) => theme.color.paragraph};
    margin: 0 0 32px;
    width: 90%;
`

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.important};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    padding: 12px 16px;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 18px;
    align-items: center;
`

export const Image = styled.img`
    border-radius: 100%;
    width: 398px;
    height: 398px;
    margin-right: 66px;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 115px 0 63px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
        padding: 32px 16px;
    }
`

export const ButtonContent = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.universal};
`