import React, { Component } from 'react'
import './Navbar.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Navbar extends Component {

    state = {linkClass : "linkNavbar " + this.props.linkStyle,
             navbarClass: "navbar " + this.props.navbarStyle  
}

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps!==prevState){
          return { linkClass: "linkNavbar " + nextProps.linkStyle,
                     navbarClass: "navbar " + nextProps.navbarStyle};
       }
       else return null;
     }

    render() {
        return (
            <div className = {this.state.navbarClass}>

                <Link className={this.state.linkClass} to="/">{this.props.german ? <>Start</> : <>Home</>}</Link>
                <Link className={this.state.linkClass} to="/about">{this.props.german ? <>Über mich</> : <>About me</>}</Link>
                <Link className={this.state.linkClass} to="/portfolio">{this.props.german ? <>Mein Portfolio</> : <>My portfolio</>}</Link>
                <Link className={this.state.linkClass} to="/impressum">{this.props.german ? <>Impressum</> : <>Imprint</>}</Link>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    german: state.german,
    linkStyle: state.linkStyle,
    navbarStyle: state.navbarStyle
})
export default connect(mapStateToProps, null)(Navbar);

