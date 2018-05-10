
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
    background-color: #e7e7e7;
    /*border: 4px solid;*/
    border-top: none;
    border-bottom: none;
    box-sizing: border-box;
    margin: auto;

`;

let color = ["red", "blue", "yellow", "green", "purple","firebrick","darkorange","chartreuse", "khaki", "gold", "azure"];
let s = Math.floor(Math.random()*8);

const BoxAnswer = styled.div`
  
    display: flex;
   
    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s]};
`;

const BoxAnswer2 = styled.div`
    /*width: 50px;*/
    display: flex;
    /*justify-content: center;*/

    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s+1]};
`;

const BoxAnswer3 = styled.div`
    /*width: 50px;*/
    display: flex;
    /*justify-content: center;*/

    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s+2]};
`;

const BoxAnswer4 = styled.div`
    display: flex;
    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s+3]};
`;

const BoxWrap = styled.div`
    background-color: #f8fff9;

`;

const Box = styled.div`
    width: 600px;
    height: 400px;
    margin: auto;
    border: #9e77f1 2px solid;
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
                    <BoxAnswer id="a" >Первый </BoxAnswer>
                    <BoxAnswer2 id="b" >Второй</BoxAnswer2>
                    <BoxAnswer3 id="c" >Третий</BoxAnswer3>
                    <BoxAnswer4 id="d" >Четвертый</BoxAnswer4>

                </TestBox>
            </Box>
        </BoxWrap>
    )
};

export default TestingPage;