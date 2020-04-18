import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

 class About extends Component {

    render() {
        return (
            <div className="about_div">
               {this.props.german ? <>Hallo von about.js</> : <>Hello from about.js</>} 
           
               <Link to="/pdfFiles/Holger_Zerbe_CV_english.pdf" target="_blank" download>Resume</Link>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(About);