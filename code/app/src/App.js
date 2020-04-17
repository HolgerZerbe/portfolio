import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from './components/navbar/Navbar';
import StartPage from './components/startPage/StartPage';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Impressum from './components/impressum/Impressum';
import NotFound from './components/notFound/NotFound';

import {switchLanguage} from './actions'
import config from "./config.json";


class App extends Component {
  state = { headerColor : "header " + this.props.headerStyle};

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.headerStyle!==prevState.headerStyle){
      return { headerColor: "header " + nextProps.headerStyle};
   }
   else return null;
 }

  componentDidMount(){
    {(JSON.parse(localStorage.getItem("german"))) ? this.props.switchLanguage(true) : this.props.switchLanguage(false)}
  }
  render (){
    
    return (
      <Router> 
        <div className="mainApp">

          <div className={this.state.headerColor}>
            <div className="headlineBtn">
              <h1 className="headline">&lt;Holger_Zerbe /&gt;</h1>
              <div className="languageBtn"><button className="germanFlag" onClick={()=>{localStorage.setItem("german", "true"); this.props.switchLanguage(true)}}></button><button className="englishFlag" onClick={()=>{localStorage.setItem("german", "false"); this.props.switchLanguage(false)}}></button></div>  
            </div>
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
        german:state.german,
        headerStyle: state.headerStyle
})
export default connect(mapStateToProps, {switchLanguage})(App);
