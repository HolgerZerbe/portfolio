import React, { Component } from 'react'
import './Moods.css'
import {connect} from 'react-redux';
import Image from './Image';
import CodeInfo from './CodeInfo';
import ArtInfo from './ArtInfo';


class Moods extends Component {
    render() {
    return (
        <>
        <div className="moods_div">
    <h1>{this.props.german ? <>Stimmungen von Goldener Entspannung</> : <> Moods of Golden Relaxation</>}</h1>
            <div className="inner_moods">
            <ArtInfo />
            <Image />
            <CodeInfo />
            </div>
        </ div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Moods);
