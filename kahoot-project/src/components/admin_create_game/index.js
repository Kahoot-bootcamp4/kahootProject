import React, { Component } from 'react';


import { Button } from "../UI/index"
import "./index.css";
import styled from 'styled-components';



class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
        };
    }

    edit = () => {
        this.setState ({edit: true});
    };
    remove = () => {
        // alert ("Нажата кнопка удалить");
        this.props.deletBlock(this.props.index)
    };
    save = () => {
        this.props.updateQuestion (this.refs.newTxt0.value, this.props.index);
        // this.props.updateAnswers1 (this.refs.`${answer}`.value, this.props.index);

        // this.props.updateAnswers2 (this.refs.newTxt2.value, this.props.index);
        // this.props.updateAnswers3 (this.refs.newTxt3.value, this.props.index);
        // this.props.updateAnswers4 (this.refs.newTxt4.value, this.props.index);

        this.props.toggle (this.props.index, this.props.j);
        this.setState ({edit: false})
    };

    rendNorm = () => {
        return (
            <div className="box">
                <div className="text">{this.props.children[0]}</div>
                {this.props.children[1].map((answer) => {
                    return (<div className="text">{answer}</div>)
                })}

                {/*<div className="text">{this.props.children[1]}</div>*/}
                {/*<div className="text">{this.props.children[2]}</div>*/}
                {/*<div className="text">{this.props.children[3]}</div>*/}
                {/*<div className="text">{this.props.children[4]}</div>*/}

                <Button height="30" width="70" onClick={this.edit} >Редактировать</Button>
                <Button height="30" width="70" onClick={this.remove} >Удалить</Button>
            </div>
        );
    };

    rendEdit = () => {
        return (
            <div className="box">

                <textarea ref="newTxt0" defaultValue={this.props.children[0]}></textarea>

                <div>
                    {this.props.children[1].map((answer, j) => {
                        return (
                        <div>
                            <textarea ref={answer} defaultValue={answer}/>
                            <input type="checkbox" onClick={this.props.toggle} />
                        </div>
                        )
                    })}
                </div>



                {/*<div>*/}
                    {/*<input type="checkbox" onClick={this.toggle} />*/}
                    {/*<textarea ref="newTxt1" defaultValue={this.props.children[1]}></textarea>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<input type="checkbox" onClick={this.toggle} />*/}
                    {/*<textarea ref="newTxt2" defaultValue={this.props.children[2]}></textarea>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<input type="checkbox" onClick={this.toggle} />*/}
                    {/*<textarea ref="newTxt3" defaultValue={this.props.children[3]}></textarea>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<input type="checkbox" onClick={this.toggle} />*/}
                    {/*<textarea ref="newTxt4" defaultValue={this.props.children[4]}></textarea>*/}
                {/*</div>*/}
                <Button onClick={this.save} >Сохранить</Button>
            </div>
        );
    };

    render() {
        if (this.state.edit) {
            return this.rendEdit ();
        } else {
            return this.rendNorm ();
        }
    }
}



const Wrapper = styled.div`
    width: 600px;
    
    margin: auto;
    border: #9e77f1 4px solid;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;


class AdminCreateGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"1v1",correct: false},
                        {var:"1v2",correct: false},
                        {var:"1v3",correct: false},
                        {var:"1v4",correct: false}
                            ]
                },
                { question:"Вопрос 2",
                    answers:[
                        {var:"2v1",correct: false},
                        {var:"2v2",correct: false},
                        {var:"2v3",correct: false},
                        {var:"2v4",correct: false}
                            ]
                },
                { question:"Вопрос 3",
                    answers:[
                        {var:"3v1",correct: false},
                        {var:"3v2",correct: false},
                        {var:"3v3",correct: false},
                        {var:"3v4",correct: false}
                            ]
                }
                  ]
        };
    };

    deletBlock =(i) => {
        let questionArr = this.state.games;
        questionArr.splice(i, 1);
        this.setState({games:questionArr})
    };
    updateQuestion = (text, i)=>{
        let questionArr = this.state.games;
        questionArr[i].question = text;
        this.setState({games:questionArr})
    };

    updateAnswers1 = (text,i,j)=>{
        let questionArr = this.state.games;
        questionArr[i].answers[j].var = text;
        this.setState({games:questionArr})
    };

    // updateAnswers2 = (text, i)=>{
    //     let questionArr = this.state.games;
    //     questionArr[i].answers[1].var2 = text;
    //     this.setState({games:questionArr})
    // };
    // updateAnswers3 = (text, i)=>{
    //     let questionArr = this.state.games;
    //     questionArr[i].answers[2].var3 = text;
    //     this.setState({games:questionArr})
    // };
    // updateAnswers4 = (text, i)=>{
    //     let questionArr = this.state.games;
    //     questionArr[i].answers[3].var4 = text;
    //     this.setState({games:questionArr})
    // };
    toggle = (i,j) => {
        let corrects = this.state.games;
        corrects[i].answers[j].correct = !corrects[i].answers[j].correct ;
        console.log(this.state)
    };



    render () {
            return (
                <Wrapper>

                    <p>СОЗДАНИЕ ИГРЫ</p>
                    {
                        this.state.games.map((item, i)=>{
                            return(
                                <Create  index={i}
                                        updateQuestion={this.updateQuestion}
                                        updateAnswers1={this.updateAnswers1}

                                        // updateAnswers2={this.updateAnswers2}
                                        // updateAnswers3={this.updateAnswers3}
                                        // updateAnswers4={this.updateAnswers4}
                                        deletBlock={this.deletBlock}
                                        toggle={this.toggle}
                                >
                                    {item.question}
                                    { item.answers.map((answer, j)=>{
                                        return (
                                             answer.var+j
                                         // console.log(answer.var)
                                    )
                                    }) }

                                    {/*{item.answers[0].var1}*/}
                                    {/*{item.answers[1].var2}*/}
                                    {/*{item.answers[2].var3}*/}
                                    {/*{item.answers[3].var4}*/}
                                    </Create>
                            )
                        })
                    }

                </Wrapper>

            )
    }

}

export default AdminCreateGame;