import React, {Component} from 'react';

import ResultPage from '../resultPage';
import TestingPage from '../users_testing_page';
import PedingRoom from '../PendingRoom';




class Common extends Component {
    state = {
        compVisible: "w3"
    };

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
export default Common;