import * as React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Contact from "./Contact";

export default class Root extends React.PureComponent {
    render() {
        return (
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path='/'
                           render={() => <LandingPage/>}/>
                    <Route path='/contact'
                           render={() => <Contact/>}/>
                </Switch>
            </HashRouter>
        );
    }
}
