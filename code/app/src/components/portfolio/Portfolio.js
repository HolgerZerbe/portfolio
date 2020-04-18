import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Portfolio.css'

class Portfolio extends Component {

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="portfolio_div">
              {this.props.german ? <>Hallo von portfolio.js</> :<>Hello from portfolio.js</> }       
                <br />
                <br />
                <hr />
                <br />
                <br />
                <Link to="/pdfFiles/Holger_Zerbe_CV_english.pdf" target="_blank" download>Resume</Link>
            </div>
       )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})


export default connect(mapStateToProps, null)(Portfolio)