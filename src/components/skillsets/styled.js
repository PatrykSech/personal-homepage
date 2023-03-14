import styled from "styled-components"

export const ListItem = styled.li`
    list-style: none;
    color: ${({ theme }) => theme.color.paragraph};
    font-size: 18px;
    margin-bottom: 8px;


    &:before {
    content: " ";
    display: inline-block;
    background-color: ${({ theme }) => theme.color.important};
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    padding: 0;
    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`