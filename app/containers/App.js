import React from 'react';
import {Router, Switch, Link, Route} from "react-router-dom";
import TodoList from "../components/TodoList";
import ModalRoot from "../components/Modals";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import history from "../history";

const Routes = props => {
    console.log(props);

    return (
        <Switch>
            <Route path={'/register'}>
                <RegistrationPage/>
            </Route>
            <Route path={'/login'}>
                <LoginPage/>
            </Route>
            <Route path={'/'}>
                <>
                    <TodoList/>
                    <ModalRoot/>
                </>
            </Route>
        </Switch>
    )
};


const App = () => {
    return (
        <Router history={history}>
            <Routes/>
        </Router>
    )
};

export default App;
