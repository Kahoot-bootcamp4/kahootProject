import React, { Component } from 'react';
import styled from 'styled-components';
import {Button, Input, CustomLink} from "./components/UI"

import AdminCreateGame from './components/admin_create_game';
import UserTestingPage from './components/users_testing_page';

const tst = () => {
    return(
    <div>
        {/*<Button theme={'light'}>TTTTTT</Button>*/}
        {/*<Input type='text'/>*/}
        {/*<CustomLink href='test link'>dasda</CustomLink>*/}
        <AdminCreateGame/>
        <UserTestingPage/>

    </div>
    )
}

export default tst;

