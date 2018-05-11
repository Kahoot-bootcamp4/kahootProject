
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
   
    margin: 20px;
    vertical-align: center;
    width: 47%;
    height: 350px;
    background-color: ${color[s]};
`;

const BoxAnswer2 = styled.div`
    /*width: 50px;*/
    display: flex;
    /*justify-content: center;*/

    margin: 20px;
    vertical-align: center;
    width: 47%;
    height: 350px;
    background-color: ${color[s+1]};
`;

const BoxAnswer3 = styled.div`
    
    display: flex;
    /*justify-content: center;*/

    margin: 20px;
    vertical-align: center;
    width: 47%;
    height: 350px;
    background-color: ${color[s+2]};
`;

const BoxAnswer4 = styled.div`
    display: flex;
    margin: 20px;
    vertical-align: center;
    width: 47%;
    height: 350px;
    background-color: ${color[s+3]};
`;

const BoxWrap = styled.div`
    background-color: #e7e8ea;
    height: 100vh;
    padding: 2rem;

`;

const Box = styled.div`
    margin: auto;
    background-color: #e7e7e7;
`;

const P = styled.div`
margin: auto;
`
const TestingPage = (props) => {
    console.log(props);


    return (

        <BoxWrap>
            <Box>

                <h2>TESTING </h2>

                <Timer />

                <TestBox>
                    <BoxAnswer id="a" ><P>ПЕРВЫЙ</P></BoxAnswer>
                    <BoxAnswer2 id="b" ><P>ВТОРОЙ</P></BoxAnswer2>
                    <BoxAnswer3 id="c" ><P>ТРЕТИЙ</P></BoxAnswer3>
                    <BoxAnswer4 id="d" ><P>ЧЕТВЕРТЫЙ</P></BoxAnswer4>

                </TestBox>
            </Box>
        </BoxWrap>
    )
};

export default TestingPage;