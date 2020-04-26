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
                    <div className="about_headline">
                        <div>
                            <h2>Holger Zerbe</h2>
                            <br/>
                            <h2>{this.props.german ? <>"Gutes Coden vereint Kreativität, Logik, Mathematik und lösungsorientiertes Denken"</> : <>"Good coding combines creativity, logic, mathematics and solution-oriented thinking"</>}</h2>
                        </div>
                        <div className="aboutPhotoDiv"><img className="aboutPhoto" src="./portfolio/image/holger.png"} alt="Holger Zerbe"></img></div>
                    </div>
                    <div className="about_main">
                        <h4>{this.props.german ? <>Mein Werdegang</> : <>My career</>}</h4>
                        <p>{this.props.german ? <>Bereits in meiner Jugend programmierte ich mit Basic und in meinem Studium der Wirtschaftsmathematik lernte ich Pascal.</> : <>In my youth I coded with Basic and in my studies in business mathematics I learned Pascal.</>}</p>
                        <p>{this.props.german ? <>Nach meinem Studium war ich in vielen Bereichen des Groß- und Einzelhandels tätig. Durch diese Tätigkeiten konnte ich mein lösungs- und kundenorientiertes Denken
und Handeln schulen und kontinuierlich weiterentwickeln sodass ich sehr agil auf neue
Herausforderungen reagieren kann.</> : <>After my studies, I worked in many areas of wholesale and retail. Through these activities I was able to train my solution oriented and customer oriented thinking and acting and continuously developing so that I am very agile for responding to  new challenges.</>}</p>
                        <p>{this.props.german ? <>Meine Leidenschaft für das Coden vertiefte ich im  Rahmen der einjährigen, praxisorientierten Vollzeit-Ausbildung zum
Fullstack Developer bei der DCI Digital Career Institute gGmbH und durch meine
Arbeit als Tutor im Web Developement.</> : <>I deepened my passion for coding as part of my one-year, practice-oriented full-time training as a
Full stack developer at the DCI Digital Career Institute gGmbH and by mine work as a tutor in web development.</>}</p>    
                        <h4>{this.props.german ? <>Meine digitalen Skills</> : <>My digital skills</>}</h4>
                        <p>HTML, CSS, JavaScript (ES2015+), Linux, Git, GitHub, Bootstrap, jQuery, React.js, Redux, Node.js, Express, MongoDB, MySQL.</p>
                        <h4>{this.props.german ? <>Mein Selbstverständnis</> : <>My self-image</>}</h4>
                        <p>{this.props.german ? <>Beim Coden sollte der Nutzen für den User immer wichtiger sein als das Design.</> : <>When coding, the benefit for the user should always be more important than the design.</>}    </p>
                   
                    </div>

                    <div className = "linkLine downloadInAbout">                   
                    {this.props.german ? <Link className="resumeLink" to="/cvsPDF/Holger_Zerbe_Lebenslauf.pdf" target="_blank" download><>Download<br/>Lebenslauf</></Link> : <Link className="resumeLink" to="/cvsPDF/Holger_Zerbe_Resume.pdf" target="_blank" download><>Download<br/>Resume</></Link>}
                    <a className="resumeLink" href="https://github.com/HolgerZerbe" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon  className="icon" icon={faGithub}   size="2x"  color="white" /></a>
                    <a className="resumeLink" href="https://www.linkedin.com/in/holger-zerbe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon"icon={faLinkedin} size="2x"  color="white" /></a>
                    <a className="resumeLink" href="mailto: holger.Zerbe@web.de"><FontAwesomeIcon className="icon"icon={faAt} size="2x" color="white" /></a>
                    <Link className="resumeLink downloadInAbout" to="/cvsPDF/DCI_Zertifikat.pdf" target="_blank" download>Download<br/>{this.props.german ? <>DCI Zertifikat</> : <>DCI Certificate</>}</Link>
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