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
                <h3>{this.props.german ? <>Wenn Sie nicht automatisch weitergeleitet     werden, klicken Sie bitte auf den nachfolgenden Link: </> :<>If you are not redirected automatically, please click on the following link: </>}<a href='https://www.foodata.info'>www.foodata.info</a></h3>
              
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
