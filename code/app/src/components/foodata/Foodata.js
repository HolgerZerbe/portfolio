import React, { Component } from 'react'
import './Foodata.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Foodata extends Component {




render() {


    return (
        <>
        <div className="foodata_div">
            <div className="inner_foodata">
                <h3>{this.props.german ? <>Wenn Sie nicht automatisch weitergeleitet werden, klicken Sie bitte auf den nachfolgenden Link: </> :<>If you are not redirected automatically, please click on the following link: </>}</h3>
                <h2><a target="_blank" rel="noopener noreferrer" href='http://www.foodata.info'>www.foodata.info</a></h2>
              
            </div>
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Foodata);
