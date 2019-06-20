// Action Creator
// Action creator = function()


// Select Song = Button untuk tampilin SongDetail
// song = object lagu
export const selectSong = (songObject) => {
    // Action = Object {} // type + payload = analogi form (header + isi)
    return {
        type: 'SONG_SELECTED',  // untuk menentukan reducer mana yang akan memproses
        payload: songObject     // berisi data yang akan ditaruh di state
    }
}

export const selectArtist = (songObject) => {
    return {
        type:'ARTIST_SELECTED',
        payload: songObject
    }
}