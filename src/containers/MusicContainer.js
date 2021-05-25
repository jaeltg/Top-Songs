import {useEffect, useState} from 'react';
import SongList from '../components/SongList'
import './MusicContainer.css'

const MusicContainer = () => {
    
    const [songs, setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs();
    })

    return (
        <>
            <h1 className="title">UK Top 20 Songs</h1>
            <SongList songs={songs} loaded={loaded}/>
        </>
    )
}

export default MusicContainer;