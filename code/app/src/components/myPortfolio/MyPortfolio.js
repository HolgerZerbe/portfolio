import React, { Component } from 'react'
import CarouselSlider from 'react-carousel-slider';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './MyPortfolio.css'
import config from '../../config.json';

 
class Portfolio extends Component {

    state = {projects : [
                {
                    linkName: config.gh_pages + "/moods",
                    target: "",
                    name: "moods",
                    imgSrc: "./image/moods.png"
                },
                {
                    linkName: config.gh_pages + "/tictactoe",
                    target: "",
                    name: "tictactoe",
                    imgSrc: "./image/tictactoe.png"
                },
                {   
                    linkName: config.gh_pages + "/foodata",
                    target: "_blank",
                    name: "www.foodata.info",
                    imgSrc: "./image/foodata.png"
                },
                {   
                    linkName: config.gh_pages + "/tutoring",
                    target: "",
                    name: "tutoring downloads",
                    imgSrc: "./image/tutoring.png"
                }
            ] 
        }

    render() {

            let items = this.state.projects.map(project => 
                <Link target={project.target} to = {project.linkName} >
                    <img src = {project.imgSrc} alt={project.name}></img>
                    <p className ="projectTitle">{project.name}</p>
                </Link>
            );
        return (
            
            <div className="portfolio_div">
            <h3 className="chooseProject">{this.props.german ? <>Bitte auf das gewählte Projekt clicken</> : <>Please click on the choosen project</>}</h3>    
                <CarouselSlider className="carousel" manner={{autoSliding:{interval : "3s" }}} slideCpnts = {items} />
    
            </div>
       )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Portfolio);