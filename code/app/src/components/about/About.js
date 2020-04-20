import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

 class About extends Component {

    render() {
        return (
            <div className="about_div">
                <div className="inner_about">
               {this.props.german ? <h2>Hallo von about.js</h2> : <h2>Hello from about.js</h2>} 
        
               {this.props.german ? <Link className="resumeLink" to="/cvsPDF/Holger_Zerbe_Lebenslauf.pdf" target="_blank" download>Lebenslauf</Link> : <Link className="resumeLink"to="/cvsPDF/Holger_Zerbe_CV_english.pdf" target="_blank" download>Resume</Link>}
        <Link className="resumeLink" to="/cvsPDF/DCI_Zertifikat.pdf" target="_blank" download>{this.props.german ? <>DCI Zertifikat</> : <>DCI Certificate</>}</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(About);