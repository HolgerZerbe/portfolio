import React, { Component } from 'react'
import './Navbar.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import config from '../../config.json';


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

                <Link className={this.state.linkClass} to={config.gh_pages + "/"}>{this.props.german ? <>Start</> : <>Home</>}</Link>
                <Link className={this.state.linkClass} to={config.gh_pages + "/about"}>{this.props.german ? <>Über mich</> : <>About Me</>}</Link>
                <Link className={this.state.linkClass} to={config.gh_pages + "/myPortfolio"}>{this.props.german ? <>Mein Portfolio</> : <>My Portfolio</>}</Link>
                <Link className={this.state.linkClass} to={config.gh_pages + "/impressum"}>{this.props.german ? <>Impressum</> : <>Legal Notice</>}</Link>

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

