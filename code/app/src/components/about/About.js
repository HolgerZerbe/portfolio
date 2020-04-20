import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from '@fortawesome/fontawesome-free-solid'
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
 

 class About extends Component {

    render() {
        return (
            <div className="about_div">
                <div className="inner_about">
                    <div className = "linkLine">                   
                    {this.props.german ? <Link className="resumeLink" to="/cvsPDF/Holger_Zerbe_Lebenslauf.pdf" target="_blank" download><>Lebenslauf</></Link> : <Link className="resumeLink" to="/cvsPDF/Holger_Zerbe_CV_english.pdf" target="_blank" download><>Resume</></Link>}
                    <a className="resumeLink" href="https://github.com/HolgerZerbe" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon  className="icon" icon={faGithub}   size="2x"  color="white" /></a>
                    <a className="resumeLink" href="https://www.linkedin.com/in/holger-zerbe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon"icon={faLinkedin} size="2x"  color="white" /></a>
                    <a className="resumeLink" href="mailto: holger.Zerbe@web.de"><FontAwesomeIcon className="icon"icon={faAt} size="2x" color="white" /></a>
                    <Link className="resumeLink" to="/cvsPDF/DCI_Zertifikat.pdf" target="_blank" download>{this.props.german ? <>DCI Zertifikat</> : <>DCI Certificate</>}</Link>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(About);