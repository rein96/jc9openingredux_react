import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {

    renderSongDetail(object) {
        return(
            <div>
                <div>
                    {console.log(object)}
                    <h4>Title    : {object.title}</h4>
                    <h4>Duration : {object.duration}</h4>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h1>SongDetail Component</h1>
                    {this.renderSongDetail(this.props.STATESELECTEDSONG)}
                </div>                             
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        STATESELECTEDSONG: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);