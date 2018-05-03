import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Input} from '../UI/index';



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
            <div class="root">
                <Input type="password"
                       className="login__name"
                       placeholder="Password"
                       value={password}
                       onChange={this.changeInput.bind(this, 'password')}
                />
                <br/>
                <Button height={30} width={11} onClick={this.login}>Enter</Button>
            </div>
        )
    }
}



