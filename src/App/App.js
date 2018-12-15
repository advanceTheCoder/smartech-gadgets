import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import HeaderBar from '../Components/Header/HeaderBar';
import Footer from '../Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <HeaderBar/>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
