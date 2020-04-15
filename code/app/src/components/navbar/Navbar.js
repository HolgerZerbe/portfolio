import React, { Component } from 'react'
import './Navbar.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <Link className="linkNavbar" to="/">{this.props.german ? <>Start</> : <>Home</>}</Link>
                <Link className="linkNavbar" to="/about">{this.props.german ? <>Über mich</> : <>About me</>}</Link>
                <Link className="linkNavbar" to="/portfolio">{this.props.german ? <>Mein Portfolio</> : <>My portfolio</>}</Link>
                <Link className="linkNavbar" to="/impressum">{this.props.german ? <>Impressum</> : <>Imprint</>}</Link>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Navbar);
