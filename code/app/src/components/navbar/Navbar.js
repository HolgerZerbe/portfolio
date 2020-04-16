import React, { Component } from 'react'
import './Navbar.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Navbar extends Component {

    state = {linkClass : "linkNavbar " + this.props.linkStyle};

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.linkStyle!==prevState.linkStyle){
          return { linkClass: "linkNavbar " + nextProps.linkStyle};
       }
       else return null;
     }

    render() {
        return (
            <div className="navbar">

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
    linkStyle: state.linkStyle
})
export default connect(mapStateToProps, null)(Navbar);
