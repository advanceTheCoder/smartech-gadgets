import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import HeaderBar from '../Components/Header/HeaderBar';
// import Contact from '../Elements/Contact/Contact.jsx';
// import About from '../Elements/About/About.jsx';
// import Article from '../Elements/Articles/Article.jsx';
// import Home from '../Home/Home.jsx';
// import SlideBar from '../Elements/SlideBar/SlideBar';
// import Profile from '../Elements/Profile/Profile.jsx';
// import Logout from '../Elements/Logout/Logout.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <HeaderBar/>
            <Switch>
              {/* <Route path = "/" component = {Home} exact />
              
              
               */}
              {/* <Route path = "/user/logout" component = {Logout} exact />
              <Route path = "/user/profile" component = {Profile} exact /> */}
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
