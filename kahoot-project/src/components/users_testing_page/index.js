
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
               <div id="a" className="BoxAnswer">Первый</div>
               <div id="b" className="BoxAnswer">Второй</div>
               <div id="c" className="BoxAnswer">Третий</div>
               <div id="d" className="BoxAnswer">Четвертый</div>

            </div>
        </div>
    )
};

export default TestingPage;

