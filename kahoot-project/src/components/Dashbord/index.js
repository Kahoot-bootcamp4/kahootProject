

import  React, {Component} from "react";
import styled from 'styled-components';
import {Button} from "../UI";


const Container = styled.div`
    font-style: italic;
    font-size: 26px;
`

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
`

const Div = styled.div`
background-color: #e7e8ea;
height: 100vh;
`

const Li = styled.div`
  flex-basis: 30%;
  margin-top: 40px;
  :nth-child(-n+3) {
    margin-top: 0;
    }
`

const H1 = styled.div`
font-size: 36px;
padding: 50px 0;
display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

const Btn = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;


`


class AdminUser extends Component{
    state = {
        pin: 35465,
         users: [
             {id:0,
                 name: 'user1',
                 points: 0},

             {id:1,
                 name: 'user2',
                 points: 0},

             {id:2,
                 name: 'user3',
                 points: 0},

             {id:3,
                 name: 'user4',
                 points: 0},

             {id:4,
                 name: 'user5',
                 points: 0},

             {id:5,
                 name: 'user6',
                 points: 0},

             {id:6,
                 name: 'user7',
                 points: 0},

             {id:7,
                 name: 'user8',
                 points: 0},

             {id:8,
                 name: 'user9',
                 points: 0},

             {id:9,
                 name: 'user10',
                 points: 0}
         ]
    };

    render(){
        return(

            <Div>

            <H1>game code: {this.state.pin}</H1>

            <Container>
            <Ul>
                {this.state.users.map((users, index) => {
                    return <Li>{this.state.users[index].name.toUpperCase()}</Li>
                })}
            </Ul>
        </Container>

                <Btn>
                <H1> Players: ...{this.state.users.length}...
                <Button type="button">Start</Button>
                </H1>
                </Btn>

            </Div>

        )}}
            export default AdminUser;

