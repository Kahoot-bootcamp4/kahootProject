import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Input} from '../UI/index';

const DivName = styled.div`
background-color: #e7e8ea;
  height: 100vh;
  display: flex;
`
const Name = styled.div`
    margin: auto;
   
`;

export default class UserName extends Component {
    state = {
        login: '',
        password: ''
    };
    changeInput(field, e){
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        const {login, password} = this.state;
        return (
            <DivName>
            <Name>
                <Input type="text"
                       className="login__name"
                       placeholder="Name"
                       value={password}
                       onChange={this.changeInput.bind(this, 'password')}
                />
                <br/>
                <Button height={30}  onClick={this.login}>Enter</Button>
            </Name>
            </DivName>
        )
    }
}



