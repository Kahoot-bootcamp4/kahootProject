import React, {Component} from 'react'


class AdminLogin extends Component {
    state ={
        login: '',
        password: ''
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

    render () {
        return (
        <div>
            <input type='text' value={this.state.login} onChange={this.onChange.bind(this, 'login')} />
            <input type='password' value={this.state.password} onChange={this.onChange.bind(this, 'password')} />
            <button onClick={this.loginFunc}>Login</button>
        </div>
        )

    }
}

export default AdminLogin