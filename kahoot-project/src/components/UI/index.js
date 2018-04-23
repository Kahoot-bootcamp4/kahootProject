//import React, {Component} from 'react';
import styled from 'styled-components';
//import {excludeProp} from "../../utils";
// import {withRouter} from "react-router-dom";


const Button = styled.button`
    background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
    color: ${props => props.color ? props.color : '#5ab962'};
    height: ${props => props.height ? props.height : 50}px;
    width: ${props => props.width ? props.width : 100}%;
    max-width: 480px;
    text-transform:uppercase;
    border: none;
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.14em;
`;

const Input = styled.input`
  background-color: #e7e7e7;
    letter-spacing: 0.04em;
    height: 100%;
    //width: 100%;
    border: none;
    &:focus{
      outline: none;
    }
    &::placeholder{
      color: #333;
      opacity: 0.7;
    }
`;

const CustomLink = styled.a`
    color: #ff0808;
    font-size: 11px;
    font-weight: bold;

`;

export {Button, Input, CustomLink}