import React, { Component } from 'react';
import {connect} from 'react-redux';

class CodeInfo extends Component {

    render() {
            return (
            <>
            <div className="code">
                <h3> Code-Info</h3>  
            <h4>{this.props.german ? <>Stimmungen</> : <>Moods</>}</h4>
                <p>{this.props.german ? <>Umsetzung der Kästchentechnik in Code. Änderung der Stimmung des Bildes durch zufällige Beeinflussung der Farben und der Lichtdurchlässigkeit (opacity)</> : <>
Transmitting the box technique to code. Changing the mood of the picture by randomly influencing the colors and the light transmission (opacity)</>}</p>
                <h4>Holger Zerbe</h4>
                <p>Web Developer</p>
                <p>{this.props.german ? <>Bei ihm paaren sich gutes Coden mit Kreativität und logischen, lösungsorientertem Denken</> : <>
He combines good coding with creativity and logical, solution-oriented thinking</>}</p>
                <p></p>
                <a target="_blank" href="https://www.linkedin.com/in/holger-zerbe">{this.props.german ? <>Holger Zerbe auf LinkedIn</> : <>Holger Zerbe on LinkedIn</>}</a>
                <p></p>
                <a target="_blank" href="https://www.github.com/HolgerZerbe">{this.props.german ? <>Holger Zerbe auf Github</> : <>Holger Zerbe on Github</>}</a>
                <h4>E-Mail: </h4>
                <a href="mailto:holger.zerbe@web.de">holger.zerbe@web.de</a>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    german: state.german
});
export default connect(mapStateToProps, null)(CodeInfo);