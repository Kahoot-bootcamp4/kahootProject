import {Component} from 'react';
import React from 'react';
import styled from 'styled-components';
import {Button} from '../UI/index';


// wraper
const Div = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #808080;
        flex-direction: row;
        padding-top: 30%;
        justify-content: space-around;

`;




class StartPage extends Component{

 render(){
     return(
         <Div>
             <Button
                     color = {'#fff'}
                     width = {'60'}

             >USER</Button>
             <Button
                 color = {'#fff'}
                 width = {'60'}

             >TEACHER</Button>
         </Div>
     )
 }
}
export default StartPage;

