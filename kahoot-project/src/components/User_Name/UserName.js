import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Input} from '../UI/index';
import {connect} from 'react-redux';

const DivName = styled.div`
background-color: #e7e8ea;
  height: 100vh;
  display: flex;
`
const Name = styled.div`
    margin: auto;
   
`;



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
            <DivName>
                <Name>
                    <Input type="text"
                           className="login__name"
                           placeholder="nickName"
                           value={this.state.nickName}
                           onChange={this.changeInput.bind(this, 'nickName')}
                    />
                    <br/>
                    <Button height={30}  onClick={this.addNickName}>Enter</Button>
                </Name>
            </DivName>
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
                type: "ADD_NEW_NICK_NAME",
                nickName
            });
        },
    }

};


export default connect(mapStateToProps, dispatchToProps)(UserName);