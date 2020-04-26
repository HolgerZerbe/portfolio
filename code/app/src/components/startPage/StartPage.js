import React, { Component } from 'react'
import './StartPage.css'
import {connect} from 'react-redux';
import {switchStyle} from '../../actions';


class StartPage extends Component {

    state= {opacity1 : 1,
            opacity2 : 0,
            opacity3 : 0}

    counter = 0;
    opacityIntervall = 0;
    opacitySummand1 = 0;
    opacitySummand2 = 0;
    opacitySummand3 = 0;

    changeStyle = (linkstyle, headerstyle, navbarstyle) => {
        localStorage.setItem("style", JSON.stringify([linkstyle, headerstyle, navbarstyle]));
        this.props.switchStyle(linkstyle, headerstyle, navbarstyle)
    }

    changeOpacity = () => {

        if (this.counter === 0 || this.counter === 2000 || this.counter === 4000 ) { 
            this.opacitySummand1 = 0;
            this.opacitySummand2 = 0;
            this.opacitySummand3 = 0;
        }
        else if (this.counter === 1000){
            this.opacitySummand1 = -0.001;
            this.opacitySummand2 = 0.001;
            this.opacitySummand3 = 0;
        }
        else if (this.counter === 3000){
            this.opacitySummand1 = 0;
            this.opacitySummand2 = -0.001;
            this.opacitySummand3 = 0.001;
        }
        else if (this.counter === 5000){
            this.opacitySummand1 = 0.001;
            this.opacitySummand2 = 0;
            this.opacitySummand3 = -0.001;
        }

        this.counter++              
        this.setState({opacity1: this.state.opacity1 + this.opacitySummand1,
                    opacity2: this.state.opacity2 + this.opacitySummand2,
                    opacity3: this.state.opacity3 + this.opacitySummand3})
        if (this.counter === 6000) {
            this.counter = 0;
        }
    }
  
    componentDidMount(){
      this.opacityIntervall = setInterval(this.changeOpacity, 1);  
    }
    
    componentWillUnmount() {
      clearInterval(this.opacityIntervall)
    }


    render() {
        return (
            <div className="startPage_div">
                <h2 className="welcome">Willkommen, Bienvenue, Welcome!</h2>
                <div className="photo">
                    <img className = "photoStartPage staticPhoto" style= {{"opacity": this.state.opacity1 }} src=".portfolio/image/HZ_Logo.jpg"} alt="Holger Zerbe Logo"></img>
                    <img className = "photoStartPage fadingPhoto1" style={{"opacity": this.state.opacity2 }} src=".portfolio/image/holger.png"} alt="Holger Zerbe"></img>
                    <img className = "photoStartPage fadingPhoto2" style={{"opacity": this.state.opacity3 }} src=".portfolio/image/code.png"} alt="Holger Zerbe"></img>
                    </div>
                <h2 className="homepage">{this.props.german ? <>auf meiner Portfolio-Seite</> : <>to my portfolio site</>}</h2>
        <h3 className="styleHeadline">{this.props.german ? <>Bitte wähle einen Stil</> : <> Please choose your favourite style</>}</h3>
                <div className="btnLine">
                    <button className ="colorBtn" onClick={()=>{this.changeStyle("linkColor1", "headerColor1", "navBgTrans")}}>{this.props.german ? <>Stil 1</> : <>style 1</>}</button>
                    <button className ="colorBtn" onClick={()=>{this.changeStyle("linkColor2", "headerColor2", "navBg2")}}>{this.props.german ? <>Stil 2</> : <>style 2</>}</button>
                    <button className ="colorBtn" onClick={()=>{this.changeStyle("linkColor3", "headerColor3", "navBgTrans")}}>{this.props.german ? <>Stil 3</> : <>style 3</>}</button>
                    <button className ="colorBtn" onClick={()=>{this.changeStyle("linkColor4", "headerColor4", "navBgTrans")}}>{this.props.german ? <>Stil 4</> : <>style 4</>}</button>
                    </div>
            </div>
        )
    }   
}

const mapStateToProps = (state) => ({
    german: state.german
})


export default connect(mapStateToProps, {switchStyle})(StartPage);
