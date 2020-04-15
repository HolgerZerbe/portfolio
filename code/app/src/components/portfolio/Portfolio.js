import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Portfolio.css'
import {searchProduct, searchById, emptyArrayOfFoundProducts} from '../../actions'

class Portfolio extends Component {

    componentWillUnmount() {
        this.props.emptyArrayOfFoundProducts()
    }

    render() {

        return (
            <div className="portfolio_div">
              Hello from portfolio.js
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrayOfFoundProducts: state.arrayOfFoundProducts,
    error: state.error,
    message: state.message,
    productFound: state.productFound
})


export default connect(mapStateToProps, {searchProduct, searchById, emptyArrayOfFoundProducts})(Portfolio)