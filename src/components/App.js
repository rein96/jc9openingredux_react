import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import ArtistDetail from './ArtistDetail';


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>App Component</h1>
                
                <SongList      />
                <SongDetail    />
                <ArtistDetail  />
            </div>
        )
    }
}

export default App;