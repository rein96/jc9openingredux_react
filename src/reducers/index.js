// Reducer : function
// Reducer : 3 Divisons : Registration , Top up, complain (BANK Analogy) : Process before store to STORE/STORAGE/STATE
// Reduce : mengubah data STORAGE -> update data

// Reducer dapet 2 input : data dari STATE + Action 

import { combineReducers } from 'redux';

// Reducer untuk generate data awal
const songsReducer = () => {
    return [
        {
            title: 'Forever Young',
            artist: 'Black Pink',
            duration: '4:05',
            personnel: ['Lisa', 'Kim Jennie', 'Kim Ji', 'Rose']
        },
        {
            title: 'Lucid Dream',
            artist: "Monogram" ,
            duration: '3:09',
            personnel: ["Kevin", "Riwon"] 
        },
        {
            title: 'Let\'s not fall in love',
            artist: "Big-Bang" ,
            duration: '4:20',
            personnel: ["Seungri", "Taeyang", "Daesung", "G-Dragon", "T.O.P"]
        },
        {
            title: 'Save Me',
            artist: "BTS" ,
            duration: '2:12',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        },
        {
            title: 'Blood, Sweat, and Tears',
            artist: "Bangtan Boys" ,
            duration: '5:15',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        }
    ]
}

// Reducer untuk handle pemilihan lagu (Select Song)
const selectedSongReducer = (data = '', action) => {
    // Reducer menerima 2 input :
    // data = data lama dari STATE
    // action 

    if (action.type == 'SONG_SELECTED'){
        return action.payload
    }

    return data;
}


// Reducer untuk handle pemilihan based on ARTIST (Select Artist)
const selectedArtistReducer = ( data = '', action) => {
    if (action.type == 'ARTIST_SELECTED') {
        return action.payload
    }

    return data;
}

// combineReducers menerima sebuah Object
// combineReducers = Object Storage (from redux library)
// combineReducers akan return sesuatu, yang akan di export
export default combineReducers({
    // synthax -> key : reducer  CUST:REG
    // laci : reducer

    songs : songsReducer,
    selectedSong : selectedSongReducer,
    selectedArtist : selectedArtistReducer
    
})

