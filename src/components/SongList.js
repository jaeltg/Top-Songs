import SongDetails from "./SongDetail"

const SongList = ({songs, loaded}) => {

    const songNodes = songs.map(song => {
        return (
        <SongDetails title={song["im:name"].label} artist={song["im:artist"].label} loaded={loaded} preview={song["link"][1].attributes.href} image={song["im:image"][0].label}/>
        )
    })

    return (
        <>
        <ol>
            {songNodes}
        </ol>
        </>
    )
    
     
}

export default SongList;