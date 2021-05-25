const SongDetails = ({title, artist, loaded}) => {
    return (
        <>
            <li>
                <p>{title} - {artist}</p>
            </li>
        </>
    )
}

export default SongDetails;