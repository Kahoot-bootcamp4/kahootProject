import {Component} from 'react';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: block;
    width: 100%;
    height: 100vh;
    background-color: #808080;

`;
const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;


class StartPage extends Component{

 render(){
     return(
         <Div>
             <Button>sfsdf</Button>
         </Div>
     )
 }
}
export default StartPage;

