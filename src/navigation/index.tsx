import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import Header from '../components/Header';
import auth from '../utils/auth';
import PrivateRoutes from './PrivateRoutes';
import Helmet from 'react-helmet';

const PrivateRoute = ({
    component: Component,
    title,
    ...rest
}: any & { component: Component}) => (
        <Route
            {...rest}
            render={props => (
                auth.getToken() !== null ? (
                    <Fragment>
                        <Helmet title={title}/>
                        <Component {...props}/>
                    </Fragment>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} 
                    />
                )
            )}
        />
    )

const AppNavigation: React.FC = () => {
    return(
        <Fragment>
        <Header/>
        <Router>
            <Switch>
                {PrivateRoutes.map((route, index) => {
                    return <PrivateRoute key={index} {...route}/>
                })}
                {PublicRoutes.map((route, index) => {
                    return <Route key={index} {...route}/>;
                })}
            </Switch>
        </Router>
        </Fragment>
    );
}

export default AppNavigation;