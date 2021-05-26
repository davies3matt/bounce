import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import Header from '../components/Header';

const AppNavigation: React.FC = () => {
    return(
        <Fragment>
        <Header/>
        <Router>
            <Switch>
                {PublicRoutes.map((route, index) => {
                    return <Route key={index} {...route}/>;
                })}
            </Switch>
        </Router>
        </Fragment>
    );
}

export default AppNavigation;