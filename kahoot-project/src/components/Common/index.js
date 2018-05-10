import React, {Component} from 'react';

import {connect} from 'react-redux';
import ResultPage from '/resultPage';


class Common extends Component {
    state = {
        compVisible: "w"
    };

    render(){
        return(
            <div>

               <ResultPage/>

            </div>
        )
    }




}
export default Common;