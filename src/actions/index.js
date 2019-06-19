// Action Creator
// Action creator = function()


// Select Song = Button untuk tampilin SongDetail
// song = object lagu
export const selectSong = (song) => {
    // Action = Object {} // type + payload = analogi form (header + isi)
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const selectArtist = (songArray) => {
    return {
        type:'ARTIST_SELECTED',
        payload: songArray
    }
}