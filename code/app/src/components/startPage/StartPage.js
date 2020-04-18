import React, { Component } from 'react'
import './StartPage.css'
import {connect} from 'react-redux';
import {switchStyle} from '../../actions';


class StartPage extends Component {

    render() {
        return (
            <div className="startPage_div">
                <h2 className="welcome">Willkommen, Bienvenue, Welcome!</h2>
                <div className="photo"><img className = "photoStartPage" src="/image/holger.png" alt="Holger Zerbe"></img></div>
                <h2 className="homepage">{this.props.german ? <>auf meiner Portfolio-Seite</> : <>to my portfolio site</>}</h2>
        <h3 className="styleHeadline">{this.props.german ? <>Bitte wähle einen Stil</> : <> Please choose your favorite style</>}</h3>
                <div className="btnLine">
                    <button className ="colorBtn" onClick={()=>{{localStorage.setItem("style", JSON.stringify(["linkColor1", "headerColor1", "navBgTrans"]));this.props.switchStyle("linkColor1", "headerColor1", "navBgTrans")}}}>{this.props.german ? <>Stil 1</> : <>style 1</>}</button>
                    <button className ="colorBtn" onClick={()=>{{localStorage.setItem("style", JSON.stringify(["linkColor2", "headerColor2", "navBg2"]));this.props.switchStyle("linkColor2", "headerColor2", "navBg2")}}}>{this.props.german ? <>Stil 2</> : <>style 2</>}</button>
                    <button className ="colorBtn" onClick={()=>{{localStorage.setItem("style", JSON.stringify(["linkColor3", "headerColor3", "navBgTrans"]));this.props.switchStyle("linkColor3", "headerColor3", "navBgTrans")}}}>{this.props.german ? <>Stil 3</> : <>style 3</>}</button>
                    <button className ="colorBtn" onClick={()=>{{localStorage.setItem("style", JSON.stringify(["linkColor4", "headerColor4", "navBgTrans"]));this.props.switchStyle("linkColor4", "headerColor4", "navBgTrans")}}}>{this.props.german ? <>Stil 4</> : <>style 4</>}</button>
                    </div>
            </div>
        )
    }   
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, {switchStyle})(StartPage);


// linkValue, headerBGValue, navbarBGValue