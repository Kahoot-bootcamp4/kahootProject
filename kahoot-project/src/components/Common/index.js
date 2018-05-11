import React, {Component} from 'react';

import ResultPage from '../resultPage';
import TestingPage from '../users_testing_page';
import PedingRoom from '../PendingRoom';




class Common extends Component {
    state = {
        compVisible: "w"
    };

    render(){
        return(
            <div>{
                this.state.compVisible==="w"? <PedingRoom/> : ""
                }
                {
                    this.state.compVisible==="w"? <TestingPage/> : ""
                }
                {
                    this.state.compVisible==="w"? <ResultPage/> : ""
                }

            </div>
        )
    }

}
export default Common;