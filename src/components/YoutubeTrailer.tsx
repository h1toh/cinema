interface YoutubeTrailerProps {
    title: string;
    src: string;
}

const YoutubeTrailer = ({ title, src }: YoutubeTrailerProps) => {
    return (
        <div className="trailer" id="trailer">
            <iframe 
            width="60%" 
            height="500"
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            src={src} 
            title={title} 
            frameBorder="0">
            </iframe>
        </div>
    )
}

export default YoutubeTrailer