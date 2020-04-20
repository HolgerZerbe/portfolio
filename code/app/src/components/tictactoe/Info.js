import React, { Component } from 'react'
import { connect } from 'react-redux';
import Miniboard from './Miniboard';

class Info extends Component {
    render() {
        return (
            <div className="info">
            {this.props.winner!==null ? <h3>{this.props.german ? <>Gewinner:</> : <>Winner:</>} {this.props.winner}</h3> : <h3>{this.props.german ? <>Nächster Spieler: </> : <>Next Player: </>}{this.props.currentPlayer}</h3>}
            {this.props.winner==="X" || this.props.winner==="O"? <h3>{this.props.german ? <>Glückwunsch</> : <>Congratulations!</>}</h3> : null}
        {this.props.winner!==null ? <button className="resetBtn" onClick={this.props.reset}>{this.props.german ? <>Neues Spiel</> : <>Restart Game</>}</button> : null}

        {this.props.history.length>1 && this.props.history.map((element, index) => index<this.props.history.length-1 && <Miniboard  key={index}contain={index} />)}

        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    german : state.german,
    winner: state.winner,
    currentPlayer: state.currentPlayer,
    history: state.history
})

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch({ type: 'RESET'})
})


export default connect(mapStateToProps, mapDispatchToProps)(Info);

