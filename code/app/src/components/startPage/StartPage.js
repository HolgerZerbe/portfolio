import React, { Component } from 'react'
import './StartPage.css'
import {connect} from 'react-redux';
import {switchLanguage} from '../../actions';


class StartPage extends Component {
    render() {
        return (
            <div className="startPage_div">
                <h2 className="welcome">Willkommen, Bienvenue, Welcome!</h2>
                <div className="photo"><img className = "photoStartPage" src="holger.png"></img></div>
                <h2 className="homepage">{this.props.german ? <>auf meiner Portfolio-Seite</> : <>to my portfolio site</>}</h2>
                <h3 className="languageHeadline">Bitte wähle einen Stil / Please choose your favorite style</h3>
            </div>

        )
    }   
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, {switchLanguage})(StartPage);


