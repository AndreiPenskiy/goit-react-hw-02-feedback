import styled from "styled-components";

export const Button = styled.button`
border: 1px solid grey;
border-radius: 10px;
background-color: white;
cursor: pointer;
font-size: 20px;
width: 100px;
height: 40px;
:not(:last-child) {
    margin-right: 10px;
}

:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}
`