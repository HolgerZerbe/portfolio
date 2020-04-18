import React, { Component } from 'react'
import './Tictactoe.css'
import {connect} from 'react-redux';

class Tictactoe extends Component {
    render() {
    return (
        <>
        <div className="tictactoe_div">
        {this.props.german ? <>Hallo von tictactoe.js</> :<>Hello from tictactoe.js</>}
        
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Tictactoe);
