import React, {Component} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button, Input} from '../UI/index';

const DivPin = styled.div`
background-color: #e7e8ea;
  height: 100vh;
  display: flex;
`
const Pin = styled.div`
    margin: auto;
   
`;




export default class UserStartPage extends Component {
    state = {
        login: '',
        password: ''
    }

    changeInput(field, e) {
        this.setState({
            [field]: e.target.value
        })
    }


    render() {
        const {login, password} = this.state;

        return (
            <DivPin>
            <Pin >
                <Input type="text"
                       className="login__name"
                       placeholder="Pin"
                       value={login}
                       onChange={this.changeInput.bind(this, 'login')}
                />
               <br/>
                <Button width={40} height={30} onClick={this.login}>Enter</Button>
            </Pin>
            </DivPin>
        )
    }
}
