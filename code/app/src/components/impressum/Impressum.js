import React, { Component } from 'react'
import './Impressum.css'
import {connect} from 'react-redux';

class Impressum extends Component {
    render() {
    return (
        <>
        <div className="impressum_div">
        {this.props.german ? <>Hallo von impressum.js</> :<>Hello from impressum.js</>}
        
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Impressum);
