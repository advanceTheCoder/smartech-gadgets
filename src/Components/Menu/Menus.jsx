import React, { Component, Fragment } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Brands from '../Products/Brands';
import Logout from '../Logout/Logout';
import Profile from '../Profile/Profile';

class Menu extends Component {
  render() {
    return (
        <Fragment>
            <Switch>
            <Route path='/' component={Home} exact/>
            <Route path = "/user/register" component = {Register} exact />
            <Route path = "/user/login" component = {Login} exact />
            <Route path = "/user/logout" component = {Logout} exact />
            <Route path = "/user/profile" component = {Profile} exact />
            <Route path = "/contact" component = {Contact} exact />
            <Route path = "/about" component = {About} exact />
            <Route path = "/blog" component = {Blog} exact />
            <Route path = "/:brand?" component = {Brands} exact />
        </Switch>
        </Fragment>
    );
  }
}

export default Menu;
