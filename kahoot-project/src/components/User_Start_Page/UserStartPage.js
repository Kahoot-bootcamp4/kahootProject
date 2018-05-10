import React, {Component} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button, Input} from '../UI/index';
import {connect} from 'react-redux';
import store from "../store/DisabledStore";




class UserStartPage extends Component {
    state = {
        rendError: false,
        pinCode: ''
    };

    changeInput(field, e) {
        this.setState({
            [field]: e.target.value
        });
    };

    addPin = () => {
        fetch('/games/check/', {
            method: 'POST',
            body: JSON.stringify(this.state.pinCode),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res)=>res.json())
            .then((data)=>{
                debugger;
                console.log(data);
                if(data.data.status === 200) {
                    console.log("OK");
                }
                else {
                    // this.setState({
                    //     rendError: true
                    // });
                    alert("ОШИБКА В ")
                }

            })
            .catch((e)=>{this.setState({rendError: true})});
        // this.props.addPin({
        //     pinCode: this.state.pinCode
        // })

    };

    render() {
        return (
            <div className="root">
                <div>{this.state.rendError ? "ОШИБКА" : ""}</div>
                <Input type="text"
                       className="login__name"
                       placeholder="ENTER_PINCODE"
                       value={this.state.pinCode}
                       onChange={this.changeInput.bind(this, 'pinCode')}
                />
                <br/>
                <Button width={10} height={30} onClick={this.addPin}>Enter</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pinCode: state.users.pinCode
    }
};
const dispatchToProps = (dispatch) => {
    return {
        addPin: ({pinCode}) => {
            dispatch({
                type: "ADD_NEW_PINCODE",
                pinCode
            });
        },
    }

};


export default connect(mapStateToProps, dispatchToProps)(UserStartPage);