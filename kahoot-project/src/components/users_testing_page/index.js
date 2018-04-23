
import { PropTypes } from "prop-types";

import React from 'react';
import Timer from "../Timer/Timer";
import './index.css'

import styled from 'styled-components';



const TestBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    /*width: 150px;*/
    min-height: 200px;
    background-color: #7df171;
    /*border: 4px solid;*/
    border-top: none;
    border-bottom: none;
    box-sizing: border-box;
    margin: auto;

`;

// const BoxAnswer = styled.div`
//     width: 45%;
//     height: 20px;
//     background-color: #9e77f1;
//
// `;

const BoxWrap = styled.div`
    background-color: #ffd129;

`;

const Box = styled.div`
    width: 600px;
    height: 400px;
    margin: auto;
    border: #9e77f1 4px solid;
    background-color: #e7e7e7;

`;

const TestingPage = (props) => {
    console.log(props);
    return (
        <BoxWrap>
        <Box>

            <h2>Testing </h2>

            <Timer />

            <TestBox>
               <div id="a" className="BoxAnswer">Первый</div>
               <div id="b" className="BoxAnswer">Второй</div>
               <div id="c" className="BoxAnswer">Третий</div>
               <div id="d" className="BoxAnswer">Четвертый</div>

            </TestBox>
        </Box>
        </BoxWrap>
    )
};

export default TestingPage;

