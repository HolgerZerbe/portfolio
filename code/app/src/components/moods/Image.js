import React, {Component} from 'react';
import './App.css';
import Square from './Square'

class Image extends Component {

  state = {
    backcolor: [],
    opacity: []
  }

  componentDidMount(){

    for (let i=0; i<36; i++){
      this.state.backcolor.push("white");
      this.state.opacity.push(0.01);
    }

    setInterval(()=>{

      let newBackcolor = [...this.state.backcolor];
      let newOpacity = [...this.state.opacity];
      let possibleColors=["white", "lightgrey", "silver", "darkgrey", "grey", "darkslategrey", "black"]

      let index = Math.floor(Math.random()*this.state.backcolor.length)

      newBackcolor[index] = possibleColors[Math.floor(Math.random()*possibleColors.length)]
      newOpacity[index] = (Math.floor(Math.random()*80))/100
      
      this.setState({
                    backcolor:[...newBackcolor],
                    opacity: [...newOpacity]
                  });
     }, 300);  
  }

  
  render (){
    return (
      <div className="image">
        {this.state.backcolor.map((element, index) => <Square key={index} color={element} opac={this.state.opacity[index]} />)}
      </div>
    );
  }
}
export default Image;
