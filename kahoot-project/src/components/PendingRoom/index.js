import  React, {Component} from "react";
import styled from 'styled-components';


//
                // <ul>
                //     {this.state.userList.map((userList, index) => {
                //         return <li>{this.state.userList[index]}</li>
                //     })}
                // </ul>
                //

const Container = styled.div`
    font-style: italic;
    font-size: 26px;
`

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
`
import {connect} from 'react-redux';


const Div = styled.div`
background-color: #e7e8ea;
height: 100vh;
`;

const Li = styled.div`
  flex-basis: 30%;
  margin-top: 40px;
  :nth-child(-n+3) {
    margin-top: 0;
    }
`

const H1 = styled.div`
font-size: 36px;
padding: 50px 0;
display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

const Btn = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const P = styled.div`
font-size: 26px;
font-style: italic;
opacity: .7;
`

class PedingRoom extends Component{
    state = {
        currentUser: this.props.nickName,
        userList: ['Jim', 'Bim', 'Sim', 'Kim', 'Vim', 'Lim', 'Fim', 'Rim', 'Pim', 'Him']

    };
    componentWillMount(){
        window.socket.on("new-user-connected", (users) => {
            this.setState({
                userList: users
            })
        });
        window.socket.on("user-disconnected", (users) => {
            this.setState({
                userList: users
            })
        })
    }

    componentWillUnmount(){
        window.socket.off("new-user-connected");
        window.socket.off("user-disconnected");
    }

    render(){
        return(

            <Div>

                <H1>{this.state.currentUser}</H1>
                <P>Waiting for other students!!!</P>
                <Container>
                    <Ul>
                        {this.state.users.map((users, index) => {
                            return <Li>{this.state.users[index].name.toUpperCase()}</Li>
                        })}
                    </Ul>
                </Container>



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




