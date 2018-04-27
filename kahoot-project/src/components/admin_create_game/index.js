import React, { Component } from 'react';
import { Button } from "../UI/index"
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 600px;
    height: 100%;
    margin: auto;
    border: #9e77f1 4px solid;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const box = styled.div `
    height: 100%;
    width: 300px;
    background-color: #e7e7e7;
    display: flex;

    align-items: center;
    flex-direction: column;
    border: aqua 1px solid;
`;

const text = styled.div `
    height: 20px;
    width: 100px;
    background-color: #e7e7e7;
`;

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

    createBlock = () => {

        this.props.createBlock()
    };

    remove = () => {

        this.props.deletBlock(this.props.index)
    };
    save = () => {
        this.props.updateQuestion (this.refs.newTxt0.value, this.props.index);
        this.props.updateAnswers1 (this.refs.newTxt1.value, this.props.index);
        this.props.updateAnswers2 (this.refs.newTxt2.value, this.props.index);
        this.props.updateAnswers3 (this.refs.newTxt3.value, this.props.index);
        this.props.updateAnswers4 (this.refs.newTxt4.value, this.props.index);
        this.setState ({edit: false})

    };

    rendNorm = () => {
        return (
            <div>
                <div className="text">{this.props.children[0]}</div>
                <div className="text">{this.props.children[1]}</div>
                <div className="text">{this.props.children[2]}</div>
                <div className="text">{this.props.children[3]}</div>
                <div className="text">{this.props.children[4]}</div>
                <Button height="30" width="70" onClick={this.edit} >Редактировать</Button>
                <Button height="30" width="70" color="#ff0808" onClick={this.remove} >Удалить</Button>
            </div>


        );
    };


    rendEdit = () => {
        return (
            <div>
                <textarea ref="newTxt0" defaultValue={this.props.children[0]}></textarea><br/>

                <textarea ref="newTxt1" defaultValue={this.props.children[1]}></textarea><br/>

                <textarea ref="newTxt2" defaultValue={this.props.children[2]}></textarea><br/>

                <textarea ref="newTxt3" defaultValue={this.props.children[3]}></textarea><br/>

                <textarea ref="newTxt4" defaultValue={this.props.children[4]}></textarea><br/>

                <Button height="30" width="70" color="#5ab962" onClick={this.save} >Сохранить</Button>
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

class AdminCreateGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var1:"v1",correct: true},
                        {var2:"v2",correct: false},
                        {var3:"v3",correct: false} ,
                        {var4:"v4",correct: false}]
                },
                { question:"Вопрос 2",
                    answers:[
                        {var1:"v1",correct: true},
                        {var2:"v2",correct: false},
                        {var3:"v3",correct: false} ,
                        {var4:"v4",correct: false}]
                },
                { question:"Вопрос 3",
                    answers:[
                        {var1:"v1",correct: true},
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

    createBlock =() => {
        let questionArr = this.state.games;
        questionArr.push(
            { question:"Вопрос",
                answers:[
                    {var1:"ячейка для правильного ответа",correct: true},
                    {var2:"v",correct: false},
                    {var3:"v",correct: false} ,
                    {var4:"v",correct: false}]
            }
        );
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
                <Button height="30" width="30" color="#2D3EFF" onClick={this.createBlock} >Создать</Button>
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
                                    createBlock={this.createBlock}

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