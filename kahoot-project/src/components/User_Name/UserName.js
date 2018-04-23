import React, {Component} from 'react';
import styled from 'styled-components';

const UserName = (props) => {
    return (
        <div onClick={props.doneExercise}>
            <input type="checkbox" checked={props.checked}/>
            <span className={props.checked? 'checked': ''}>{props.name}</span>
        </div>
    )
}
export default UserName