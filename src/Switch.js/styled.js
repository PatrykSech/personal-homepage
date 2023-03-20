import styled from "styled-components";

export const Toggle = styled.div`
    width: 48px;
    height: 26px;
    margin: 10px 0;
    border-radius: 50px;
    padding: 10px;
    outline: 2px solid ${({ isDarkTheme }) => isDarkTheme !== false ? '#FFFFFF' : '#6E7E91'};
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: ${({ isDarkTheme }) => isDarkTheme === false ? '#D1D5DA' : 'rgba(54, 54, 54, 0.72)'};
    transition: background-color 500ms linear;

    &:before{
        content: url(../features/homepage/Images/DarkMode.svg);
        width: 20px;
        height: 20px;
        background-color: ${({ isDarkTheme }) => isDarkTheme !== false ? '#FFFFFF' : '#6E7E91'};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: ${({ isDarkTheme }) => isDarkTheme !== false ? '25px' : '2.4px'};
        transition: left 300ms linear;
    }
`