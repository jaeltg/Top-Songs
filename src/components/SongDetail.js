import './SongDetail.css';

const SongDetails = ({title, artist, preview, image, loaded}) => {
    return (
        <>
            <li>
            <a href={preview}>
                <img src={image}/>
            </a>  
                <p>{title} - {artist}</p>     
            </li>
        </>
    )
}

export default SongDetails;