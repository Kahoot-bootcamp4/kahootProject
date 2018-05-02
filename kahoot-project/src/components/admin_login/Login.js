import React, {Component} from 'react';
import styled from 'styled-components';

import {Button, Input} from '../UI/index';



const Box = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
   //align-items: center;
   //align-self:center;
    margin: auto;
    width: 200px;
    height: 200px;
    background-color: #e7e7e7;
`;

const sexses = `Вы зарегились`;

class AdminLogin extends Component {
    state ={
        login: '',
        password: '',
        renderIf: false
    };

    onChange =(field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };

    loginFunc = () => {
        fetch('http://localhost:9999/auth', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((token) => {
                localStorage.setItem("token", token.token);
            })
            .catch((e) => {
                console.log(e);
            })
    };

    loginReg = () => {
        fetch('http://localhost:9999/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((token) => {


                localStorage.setItem("token", token.token);

                this.setState({
                    renderIf : token.status
                });

            })
            .catch((e) => {
                console.log(e);
            })
    };
    ifRender = () => {
        return this.state.renderIf ? sexses : ""
    };




    render () {

        return (
        <div>
            <Box>

            <div>{this.ifRender()}</div>
            <Button onClick={this.loginReg}>Reg</Button>

            <Input height={10} type='text' value={this.state.login} onChange={this.onChange.bind(this, 'login')} /><br/>

            <Input height={10} type='password' value={this.state.password} onChange={this.onChange.bind(this, 'password')} /><br/>
            <Button onClick={this.loginFunc}>Login</Button>

            </Box>
        </div>
        )

    }
}

export default AdminLogin