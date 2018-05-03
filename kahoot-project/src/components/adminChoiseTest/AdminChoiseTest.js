import React, {Component} from 'react';
import styled from 'styled-components';
import  {Button} from "../UI";

const Wraper = styled.div`
    padding-top: 100px;
    display:block;
    width: 100%;
    height: 100vh;
    background-color: #2dbcc34d;
`;

const Li = styled.li`
    border: 1px solid #000;
    margin-bottom: 20px;
        display: flex;
    justify-content: space-around;
`;
const Ul = styled.ul`
    margin-top: 100px;
    list-style: none;
`;
const P  = styled.p`
    font-size: 25px;
    line-height: 0px;
    font-weight: 600;
    color: #7e2aa7;
    width: 397.2px;
        `;


class AdminChoiseTest extends Component{
    state =[{test: 'тема для регуляркам'},{
             test: 'тема переменной'},{
             test: 'тема для инкапсуляция'
    },{
        test:'HTML5'
    },{
        test:'Css3'
    },{
        test:'Git'
    }];



    render(){
        return(
            <Wraper>
                <Button >Create Test</Button>
                <Ul>
                    {this.state.map((key,index)=>{
                        return <Li> <P>{this.state[index].test}</P>  <Button width={30}>Редактировать</Button>  <Button width={20}>Start</Button> </Li>
                    })}

                </Ul>

            </Wraper>
        )
    }

}

export default AdminChoiseTest;