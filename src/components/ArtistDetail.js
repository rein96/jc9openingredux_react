import React from 'react';
import { connect } from 'react-redux';

class ArtistDetail extends React.Component {

    renderArtistDetail(object) {
        return(
            <div>
                <h4>Artist   : {object.artist}</h4>
                <h4>Personnel: {object.personnel.join(', ')}</h4>
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h1>ArtistDetail Component</h1>
                    { this.props.STATESELECTEDARTIST === '' ? <h3>Artist is not selected</h3> : this.renderArtistDetail(this.props.STATESELECTEDARTIST) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        STATESELECTEDARTIST : state.selectedArtist
    }
}

export default connect(mapStateToProps)(ArtistDetail);