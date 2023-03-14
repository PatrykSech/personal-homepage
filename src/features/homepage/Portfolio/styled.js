import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
`
export const Icon = styled.div`
    margin-bottom: 13px;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: ${({theme}) => theme.color.title};
    margin: 0 0 24px 0;
`

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({theme}) => theme.color.title};
    margin: 13px 0 8px 0;
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.important};
    margin: 8px 0 24px 0;
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.paragraph};
    margin: 0 0 24px 0;
`

export const Link = styled.span`
    font-weight: 400;
    font-size: 18px;
    border-bottom: 1px solid #0366D6;
    color: ${({ theme }) => theme.color.important};

`
export const Project = styled.div`
    background-color: ${({ theme }) => theme.color.containers};
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;
`

export const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin-bottom: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`

export const Url = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.paragraph};
    margin: 0 0 8px 0;
`