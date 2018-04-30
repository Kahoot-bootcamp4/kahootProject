import React, {Component} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


const test = styled.div
    `background-color: red`




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
            <div class="root">
                <input type="text"
                       className="login__name"
                       placeholder="Login"
                       value={login}
                       onChange={this.changeInput.bind(this, 'login')}
                />
               <br/>
                <button onClick={this.login}>Enter</button>
            </div>
        )
    }
}
