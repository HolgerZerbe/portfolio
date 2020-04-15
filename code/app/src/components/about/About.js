import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';


 class About extends Component {

    render() {
        return (
            <div className="about_div">
               {this.props.german ? <>Hallo von about.js</> : <>Hello from about.js</>} 
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(About);