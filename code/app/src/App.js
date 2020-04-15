import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Impressum from './components/impressum/Impressum';
import StartPage from './components/startPage/StartPage';
import NotFound from './components/notFound/NotFound';
import Portfolio from './components/portfolio/Portfolio';
import config from "./config.json";


class App extends Component {


  render (){

    return (
      <Router> 
        <div className="mainApp">

          <div className="header">
            <h1 className="headline">Holger Zerbe Portfolio</h1>
            <Navbar />
          </div>
          <div className="changingAreaApp">
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/impressum" component={Impressum} />
                <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
        product: state.product,
        productFound: state.productFound,
        error: state.error,
        message: state.message
})
export default connect(mapStateToProps, null)(App);
