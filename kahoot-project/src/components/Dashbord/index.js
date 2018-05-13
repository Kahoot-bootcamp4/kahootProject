

import  React, {Component} from "react";
import styled from 'styled-components';
import {Button} from "../UI";

import {connect} from 'react-redux';


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
        pin: this.props.nickName,
         users: [
             {id:0,
                 name: 'user 1',
                 points: 0},

             {id:1,
                 name: 'user 2',
                 points: 0},

             {id:2,
                 name: 'user 3',
                 points: 0},

             {id:3,
                 name: 'user 4',
                 points: 0},

             {id:4,
                 name: 'user 5',
                 points: 0},


         ]
    };

    render(){
        return(

            <Div>

            <H1>game code: {console.log(this.props.nickName)}</H1>

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

        )}
}
            // export default AdminUser;

const mapStateToProps = (state) => {
    return {
        nickName: state.currentUser.nickName

    }
};

export default connect(mapStateToProps, null)(AdminUser);

