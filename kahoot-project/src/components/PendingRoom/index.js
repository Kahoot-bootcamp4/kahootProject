import  React, {Component} from "react";
import styled from 'styled-components';

import {connect} from 'react-redux';




const Div = styled.div`
background-color: #e7e8ea;
height: 100vh;
`



class PedingRoom extends Component{
    state = {
        currentUser: this.props.nickName,
        userList: ['Jim', 'Bim', 'Sim', 'Kim', 'Vim', 'Lim', 'Fim', 'Rim', 'Pim', 'Him']
    };

    render(){
        return(
            <Div>

                <h2>{this.state.currentUser}</h2>
                <p>Waiting for other students</p>
                <ul className='pending-room__user-list'>
                    {this.state.userList.map((userList, index) => {
                        return <li>{this.state.userList[index]}</li>
                    })}
                </ul>
            </Div>
        )
    }


}
const mapStateToProps = (state) => {
    return {
        nickName: state.currentUser.nickName
    }
};

export default connect(mapStateToProps, null)(PedingRoom);


