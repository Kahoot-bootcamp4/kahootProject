
import { PropTypes } from "prop-types";

import React from 'react';
import Timer from "../Timer/Timer";
import './index.css'



const TestingPage = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Testing </h2>

            <Timer />

            <div className="TestBox">
               <div className="BoxAnswer">Первый</div>
               <div className="BoxAnswer">Второй</div>
               <div className="BoxAnswer">Третий</div>
               <div className="BoxAnswer">Четвертый</div>

            </div>
        </div>
    )
};

export default TestingPage;

