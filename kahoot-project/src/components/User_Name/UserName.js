import React, {Component} from 'react';
import styled from 'styled-components';



export default class UserName extends Component {
    state = {
        login: '',
        password: ''
    }
    changeInput(field, e){
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        const {login, password} = this.state;
        return (
            <div class="root">
                <input type="password"
                       className="login__name"
                       placeholder="Password"
                       value={password}
                       onChange={this.changeInput.bind(this, 'password')}
                />
                <br/>
                <button onClick={this.login}>Enter</button>
            </div>
        )
    }
}



