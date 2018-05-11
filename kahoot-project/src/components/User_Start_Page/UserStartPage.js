import React, {Component} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button, Input} from '../UI/index';
import {connect} from 'react-redux';
import store from "../store/DisabledStore";

const DivPin = styled.div`
background-color: #e7e8ea;
  height: 100vh;
  display: flex;
`
const Pin = styled.div`
    margin: auto;
   
`;



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
            <DivPin>
            <Pin >
                <Input type="text"
                       className="login__name"
                       placeholder="Pin"
                       value={this.state.pinCode}
                       onChange={this.changeInput.bind(this, 'pinCode')}
                />
               <br/>
                <Button  width={40} onClick={this.login}>Enter</Button>
            </Pin>
            </DivPin>
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


