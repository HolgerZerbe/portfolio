import React, { Component } from 'react'
import './Tutoring.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Tutoring extends Component {

state = {
    pdfs: ["ARRAYS.pdf", "ARRAY_ITERATION-forEach_map_filter_reduce.pdf", "ARROW_FUNCTIONS.pdf", "ARROW_FUNCTIONS_THIS_+_HOISTING.pdf", "CALL_APPLY_BIND_FUNCTIONS.pdf", "CALLBACKS.pdf", "CLASSES.pdf", "CLOSURES.pdf", "CONDITIONAL_STATEMENTS.pdf", "CONSTRUCTOR_FOR_OBJECTS.pdf", "DESTRUCTURING.pdf", "DOM_+_DOM-MANIPULATION.pdf", "DOM-MANIPULATION_STYLE.pdf", "EVENT_LISTENER.pdf", "EXECUTION_CONTEXT.pdf", "FUNCTIONS-FUNKTIONEN.pdf", "FUNCTION_CONSTRUCTOR_PROTOTYPES.pdf", "FUNCTIONS_AS_PARAMETER.pdf", "IFFES.pdf", "INHERITANCE_VERERBUNG_PROTOTYPE-CHAINS.pdf", "JSON.pdf", "LOOPS_SCHLEIFEN.pdf", "OBJECTS_OBJEKTE.pdf", "PRIMITIVES_VS_OBJECTS.pdf", "REST-OPERATOR.pdf", "SCOPES.pdf", "SPREAD-OPERATOR.pdf", "STRINGS.pdf", "STRING_MANIPULATION.pdf", "THIS-KEYWORD.pdf", "VARIABLES_VARIABLEN.pdf", "VAR_LET_CONST.pdf", "WEBSTORAGE.pdf"]
}


render() {
    let pdfsLink = [];
    let pdfsName = [];
    
    for (let elem of this.state.pdfs) {
        pdfsLink.push("./tutoringPDF/" + elem);
        pdfsName.push(elem.split(".")[0]);
    }

    return (
        <>
        <div className="tutoring_div">
            <div className="inner_tutoring">
                <h3>{this.props.german ? <>Willkommen zum Download meiner Tutoring-Texte</> :<>Welcome for download my tutoring texts</>}</h3>
                <p className="sorryP">{this.props.german ? <></> :<>Sorry, all texts are only available in German</>}</p>
                <hr />
                <ul>
                {pdfsLink.map((pdf, index) =><li key={index}><Link className="tutoringLink"to={pdf} target="_blank" download>{pdfsName[index]}</Link></li>)}
               
                </ul>
            </div>
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Tutoring);
