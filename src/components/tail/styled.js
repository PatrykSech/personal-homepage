import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.color.containers};
    border-radius: 4px;
    padding: 32px;
    margin-bottom: 72px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`

export const SubHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.title};
    padding-bottom: 15px;
    margin: 0;
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`
