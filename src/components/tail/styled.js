import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.color.white};
    border-radius: 4px;
    padding: 32px;
    margin-bottom: 72px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`

export const ListItem = styled.li`
    list-style: none;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    margin-bottom: 8px;


    &:before {
    content: " ";
    display: inline-block;
    background-color: ${({ theme }) => theme.color.scienceBlue};
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
`

export const SubHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.mineShaft};
    padding-bottom: 15px;
    margin: 0;
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`