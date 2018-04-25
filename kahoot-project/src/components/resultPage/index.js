import React, { Component } from 'react';
import styled from 'styled-components';

const Wraper = styled.div`

    background-color: #61dede9e;
        flex-direction: column;
    width: 100%;
    height: 100vh;
    display: flex;
    font-size: 30px;
`;
const Ul = styled.ul`
      list-style: none;
      display: flex;
    flex-direction: column;
`;
const Li = styled.li`
border: 1px solid #000;
display: flex;
    flex-direction: roll;

`;
const P = styled.p`
border: 1px solid #000;
`;


class ResultPage extends Component {
    state =[
        {
          name: 'first',
          score:1036
        },{
            name: 'second',
            score:1202
        },{
            name: 'third',
            score:2036
        },{
            name: 'for',
            score:202
        },{
            name: 'Вася',
            score:10
        },{
            name: 'Петя',
            score:1302
        },{
            name: 'Коля',
            score:2022
        },{
            name: 'Миша',
            score:402
        }
    ];

    render (){
    return (

        <Wraper>
            <Ul>
            {this.state.sort((a,b)=>{
              return  b.score - a.score;
            }).map((item,e)=>{
                let a = e;
                a++;
                return  <Li><P>№{a}</P>  <P>name ={this.state[e].name}</P><P>score = {this.state[e].score}</P> </Li>})}

            </Ul>
        </Wraper>
    )

}
}
export default ResultPage;
