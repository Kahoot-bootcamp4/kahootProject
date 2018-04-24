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
        alert ("Нажата кнопка удалить");
        this.props.deletBlock(this.props.index)
    };
    save = () => {
        this.props.updateQuestion (this.refs.newTxt0.value, this.props.index);
        this.props.updateAnswers1 (this.refs.newTxt1.value, this.props.index);
        this.props.updateAnswers2 (this.refs.newTxt2.value, this.props.index);
        this.props.updateAnswers3 (this.refs.newTxt3.value, this.props.index);
        this.props.updateAnswers4 (this.refs.newTxt4.value, this.props.index);
        this.setState ({edit: false})
        // let value = this.refs.newTxt.value;
    };

    rendNorm = () => {
        return (
            <div className="box">
                <div className="text">{this.props.children[0]}</div>
                <div className="text">{this.props.children[1]}</div>
                <div className="text">{this.props.children[2]}</div>
                <div className="text">{this.props.children[3]}</div>
                <div className="text">{this.props.children[4]}</div>
                <Button height="30" width="70" onClick={this.edit} >Редактировать</Button>
                <Button height="30" width="70" onClick={this.remove} >Удалить</Button>
            </div>
        );
    };

    rendEdit = () => {
        return (
            <div className="box">
                <textarea ref="newTxt0" defaultValue={this.props.children[0]}></textarea>
                <textarea ref="newTxt1" defaultValue={this.props.children[1]}></textarea>
                <textarea ref="newTxt2" defaultValue={this.props.children[2]}></textarea>
                <textarea ref="newTxt3" defaultValue={this.props.children[3]}></textarea>
                <textarea ref="newTxt4" defaultValue={this.props.children[4]}></textarea>
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
                        {var1:"v1",correct: false},
                        {var2:"v2",correct: false},
                        {var3:"v3",correct: false} ,
                        {var4:"v4",correct: false}]
                },
                { question:"Вопрос 2",
                    answers:[
                        {var1:"v1",correct: false},
                        {var2:"v2",correct: false},
                        {var3:"v3",correct: false} ,
                        {var4:"v4",correct: false}]
                },
                { question:"Вопрос 3",
                    answers:[
                        {var1:"v1",correct: false},
                        {var2:"v2",correct: false},
                        {var3:"v3",correct: false} ,
                        {var4:"v4",correct: false}]
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
    updateAnswers1 = (text, i)=>{
        let questionArr = this.state.games;
        questionArr[i].answers[0].var1 = text;
        this.setState({games:questionArr})
    };
    updateAnswers2 = (text, i)=>{
        let questionArr = this.state.games;
        questionArr[i].answers[1].var2 = text;
        this.setState({games:questionArr})
    };
    updateAnswers3 = (text, i)=>{
        let questionArr = this.state.games;
        questionArr[i].answers[2].var3 = text;
        this.setState({games:questionArr})
    };
    updateAnswers4 = (text, i)=>{
        let questionArr = this.state.games;
        questionArr[i].answers[3].var4 = text;
        this.setState({games:questionArr})
    };



    render () {
            return (
                <Wrapper>

                    <p>СОЗДАНИЕ ИГРЫ</p>


                    {
                        this.state.games.map((item, i)=>{
                            return(
                                <Create key={i} index={i}
                                        updateQuestion={this.updateQuestion}
                                        updateAnswers1={this.updateAnswers1}
                                        updateAnswers2={this.updateAnswers2}
                                        updateAnswers3={this.updateAnswers3}
                                        updateAnswers4={this.updateAnswers4}
                                        deletBlock={this.deletBlock}
                                >
                                    {item.question}
                                    {item.answers[0].var1}
                                    {item.answers[1].var2}
                                    {item.answers[2].var3}
                                    {item.answers[3].var4}
                                    </Create>
                            )
                        })
                    }

                </Wrapper>

            )
    }

}

export default AdminCreateGame;