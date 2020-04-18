import React, { Component } from 'react'
import './Moods.css'
import {connect} from 'react-redux';

class Moods extends Component {
    render() {
    return (
        <>
        <div className="moods_div">
        {this.props.german ? <>Hallo von moods.js</> :<>Hello from moods.js</>}
        
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Moods);
