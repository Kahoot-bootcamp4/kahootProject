import React, {Component} from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
display:block;
    width: 100%;
    height: 100vh;
    background-color: #2dbcc34d;
`;

class AdminChoiseTest extends Component{
    state =[{test: 'тема для регуляркам'},{
         test: 'тема переменной'
    },{
        test: 'тема для инкапсуляция'
    }];
    render(){
        return(
            <Wraper>
                {this.state.map((key,index)=>{
                    return <p> test = {this.state[index].test}  </p>
                })}
            </Wraper>
        )
    }

}

export default AdminChoiseTest;