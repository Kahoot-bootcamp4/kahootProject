import  React, {Component} from "react";

class PedingRoom extends Component{
    state = {
        currentUser: 'Ivanko',
        userList: ['Jim', 'Bim', 'Sim', 'Kim', 'Vim', 'Lim', 'Fim', 'Rim', 'Pim', 'Him']
    };

    render(){
        return(
            <div className='pending-room'>
                <div className='pending-room__waiting'></div>
                <h2>{this.state.currentUser}</h2>
                <p>Waiting for other students</p>
                <ul className='pending-room__user-list'>
                    {this.state.userList.map((userList, index) => {
                        return <li>{this.state.userList[index]}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default PedingRoom;

