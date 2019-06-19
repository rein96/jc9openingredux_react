import React from 'react';
import { connect } from 'react-redux';
// connect = bridge state ke component (jalur KIRI ambil dan KANAN ubah)
// react-redux = menghubungkan
// jalur kiri = mapStateToProps (dari STATE ke component)

import { selectSong,selectArtist } from '../actions/index'

class SongList extends React.Component {

    renderJudulDanButton = (arraySongs) => {
        // index = untuk membuat unique KEY masing2 tag <div UTAMA> 
        // index = mulai dari 0 (+1)
        // key = synthax dari React
        var hasil = arraySongs.map( (el, index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-sm">
                        <span className="m-5">{el.title}</span>
                    </div>
    
                    <div className="col-sm">
                        <button className="btn btn-success m-1" onClick={() => this.props.selectSong(el)}>Select Song </button>
                        <button className="btn btn-success" onClick={ () => this.props.selectArtist(el) }> Select Artist</button>
                    </div>
                </div>
            )
        })
    
        return hasil
    }

    render() {
        return (
            <div>
                <h1>SongList Component</h1>
                <h3>Jumlah lagu = {this.props.STATELAGU.length}</h3>
                <h3>{this.props.judul}</h3>

                {this.renderJudulDanButton(this.props.STATELAGU)}
                <br/>
            </div>
        )
    }
}

// ini sengaja diluar Class
// jalur kiri = mapStateToProps (dari STATE ke component)
const mapStateToProps = (state) => {
    return {
        STATELAGU: state.songs
    }
}




export default connect(mapStateToProps, {selectSong, selectArtist})(SongList)
// connect component songList dengan REDUX
// mapStateToProps = jalur kiri = state to component