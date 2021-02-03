import styled from 'styled-components';

export const BtnIcons = styled.button`
display: flex;
align-items: center;
padding: 10px;
width: 100%;
border-radius: 5px;
border: 0px;
outline: none;
font-size: 16px;
font-weight: bold;
margin-botton: 15px;
transition: 0.2s;

`;

export const BtnDefoult = styled(BtnIcons)`
background-color: #7d2ae8;
    color: #fff;
    display: inline;

    &:hover{
        background-color: #de129c;
    }
`;