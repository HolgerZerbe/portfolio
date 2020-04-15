import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Portfolio.css'

class Portfolio extends Component {

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="portfolio_div">
              {this.props.german ? <>Hallo von portfolio.js</> :<>Hello from portfolio.js</> }           </div>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})


export default connect(mapStateToProps, null)(Portfolio)