import React, { Component } from 'react';
import {connect} from 'react-redux';

class ArtInfo extends Component {
        render() {
            return (
            <div className="art">
                <h3>{this.props.german ? <>Kunst-Info</> : <>Art Info</>}</h3>  
                <h4>{this.props.german ? <>Goldene Entspannung</> : <>Golden Relaxation</>}</h4>
            <p>{this.props.german ? <>Acryl auf Leinwand</> : <>Acrylic on canvas</>}, 100 x 100 cm</p>
                <a target="_blank" rel="noopener noreferrer" href="https://petra-kleiboemer.de/kaestchentechnik.html">Original</a>
                <h4>Petra Kleiböhmer</h4>
                <p>{this.props.german ? <>Malerin und Künstlerin</> : <>Painter and artist</>}
</p>
                <p>{this.props.german ? <>Ihre spezielle Kästchentechnik für ihre "verschobenen Bilder" (auf friesich: Fersköwen Biljen) ist ihr Markenzeichen</> : <>
            Her special box technique for her "shifted pictures" (in Frisian: Fersköwen biljen) is her trademark</>}</p>
                <p></p>
                <a target="_blank" rel="noopener noreferrer" href="https://petra-kleiboemer.de/biografie.html">{this.props.german ? <>Biographie</> : <>Biography</>}
</a>
                <h4>E-Mail: </h4>
                <a href="mailto:info@petra-kleiboemer.de">info@petra-kleiboemer.de</a>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    german: state.german
})

export default connect(mapStateToProps, null)(ArtInfo);
