import React, {Component} from 'react';

import ResultPage from '../resultPage';
import TestingPage from '../users_testing_page';
import PedingRoom from '../PendingRoom';

import socket from 'socket.io-client';
import {connect} from 'react-redux';



class Common extends Component {
    state = {
        compVisible: "w1"
    };

    componentWillMount(){
        const {nickName} = this.props;
        window.socket = socket({
            path: "/room/",
            query: {
                name: nickName,
                roomID: this.props.roomID
            }
        });
    }

    componentWillUnmount(){
        // disconnect socket
    }

    render(){
        return(
            <div>{
                this.state.compVisible==="w1"? <PedingRoom/> : ""
                }
                {
                    this.state.compVisible==="w2"? <TestingPage/> : ""
                }
                {
                    this.state.compVisible==="w3"? <ResultPage/> : ""
                }


            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        nickName: state.currentUser.nickName,
        roomID: state.currentUser.roomID
    }
};

export default connect(mapStateToProps, null)(Common);
// export default Common;