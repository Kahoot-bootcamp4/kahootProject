import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import AdminLogin from './components/admin_login/Login'

import Test from './test.js';

import AdminCreateGame from './components/admin_create_game';
import UserTestingPage from './components/users_testing_page';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>

                        <Route path='/create' component={AdminCreateGame} />
                        <Route path='/' component={UserTestingPage} />

                        
                        {/*<Test/>*/}

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;