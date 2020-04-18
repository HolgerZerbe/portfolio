import React, { Component } from 'react'
import {connect} from 'react-redux';
import CarouselSlider from 'react-carousel-slider';
import {Link} from 'react-router-dom';

import './Portfolio.css'

 
class Portfolio extends Component {

    render() {

            let jsonData = 
                {
                    "items": [
                        {
                            "linkName" : "/moods",
                            "des": "moods",
                            "imgSrc": "/image/moods.png"
                        },
                        {
                            "linkName" : "/tictactoe",
                            "des": "tictactoe",
                            "imgSrc": "/image/tictactoe.png"
                        },
                        {   
                            "linkName" : "/foodata",
                            "des": "www.foodata.info",
                            "imgSrc": "/image/foodata.png"
                        },
                        {   
                            "linkName" : "/tutoring",
                            "des": "tutoring downloads",
                            "imgSrc": "/image/tutoring.png"
                        }
                    ] 
                }
            
            let items = jsonData.items.map((item, index) => 
                <Link to = {item.linkName} >
                    <img src = {item.imgSrc} ></img>
                    <p style ={{fontWeight: "bolder"}}>{item.des}</p>
                </Link>
            );
        return (
            <div className="portfolio_div">

            <CarouselSlider className="carousel" manner={{autoSliding:{interval : "3s" }}} slideCpnts = {items} />
    
            </div>
       )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})


export default connect(mapStateToProps, null)(Portfolio)