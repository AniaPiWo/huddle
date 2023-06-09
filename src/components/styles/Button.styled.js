import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};
    transition: transform 0.3s ease; 

    &:hover {
        transform: scale(1.05);
    }
`
