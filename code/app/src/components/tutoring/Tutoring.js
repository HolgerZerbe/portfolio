import React, { Component } from 'react'
import './Tutoring.css'
import {connect} from 'react-redux';

class Tutoring extends Component {
    render() {
    return (
        <>
        <div className="tutoring_div">
        {this.props.german ? <>Hallo von tutoring.js</> :<>Hello from tutoring.js</>}
        
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Tutoring);
