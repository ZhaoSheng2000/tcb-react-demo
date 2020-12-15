import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import tcb from "tcb-js-sdk";

import Home from '../home/home';


export default class Main extends React.Component {
    state = {

    };
    componentDidMount() {       
        const app = tcb.init({
            env: "movie-0g7l5naq8b967325"
        });
        const loginState = app.auth().hasLoginState();

        if (loginState) {
            // 登录态有效
            this.props.history.push('/main/home')
        } else {
            // 没有登录态，或者登录态已经失效
            this.props.history.push('/login')
        }
    }
    render() {       
        return (
            <BrowserRouter>
            <Switch>
              <Route path="/main/home" component={Home} />
            </Switch>
          </BrowserRouter>
        )
    }

}

