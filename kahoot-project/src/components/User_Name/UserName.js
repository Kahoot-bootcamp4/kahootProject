import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Input} from '../UI/index';
import {connect} from 'react-redux';





 class UserName extends Component {
    state = {
        nickName: this.props.nickName
    };
    changeInput(field, e){
        this.setState({
            [field]: e.target.value
        })
    };
     addNickName = () => {
         this.props.addNickName({
             nickName: this.state.nickName
              })
     };

    render() {
        const {nickName} = this.state;
        console.log(nickName);
        return (
            <div className="root">
                <Input type="text"
                       className="login__name"
                       placeholder="NICK_NAME"
                       value={nickName}
                       onChange={this.changeInput.bind(this, 'nickName')}
                />
                <br/>
                <Button height={30} width={11} onClick={this.addNickName}>Enter</Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        nickName: state.currentUser.nickName
    }
};
const dispatchToProps = (dispatch) => {
    return {
        addNickName: ({nickName}) => {
            dispatch({
                type: "USER_CHANGE_NAME",
                nickName
            });
        },
    }

};


export default connect(mapStateToProps, dispatchToProps)(UserName);

