//import React, {Component} from 'react';
import styled from 'styled-components';
//import {excludeProp} from "../../utils";
// import {withRouter} from "react-router-dom";


export const Button = styled.button`
    background-image: ${props => props.theme === 'light'? '#fff' : '#000'};
    height: ${props => props.size ? props.size : 50}px;
    width: ${props => props.size ? props.size : 100}%;
    max-width: 480px;
    text-transform:uppercase;
    border: none;
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.14em;
`;

const Input = styled.input`
    letter-spacing: 0.04em;
    height: 100%;
    width: 100%;
    border: none;
    &:focus{
      outline: none;
    }
    &::placeholder{
      color: #333;
      opacity: 0.7;
    }
`;

const Link = styled.link`
    color: #ff0808;
    font-size: 11px;
    font-weight: bold;

`;
