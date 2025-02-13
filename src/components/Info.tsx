import { useParams } from "react-router-dom"
import Filmes from "../assets/database/Filmes"
import ScrollTrailer from "./ScrollTrailer";
import ScrollSessao from "./ScrollSessoes";

const Info = () => {

    const { route } = useParams<{ route: string }>();

    const filme = Filmes.Filmes.find((f) =>
        f.route === route)

    if (!filme) {
        return <div>O filme não foi encontrado</div>
    }

    return (
        <>
            <div className="info" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${filme.banner})` }}>

                <img className="posterInfo" src={filme.poster} alt={filme.titulo} />

                <div className="infoText">
                    <span><h1>{filme.titulo}</h1> <p>({filme.ano})</p></span>
                    <p>{filme.duracao} | {filme.genero} {filme.classificacao}</p>
                    <p>{filme.sinopse}</p>
                    <div className="buttons">
                        <ScrollSessao id="sessoes"/>
                        <ScrollTrailer id="trailer"/>
                    </div>
                </div>
            </div>
            <div className="trailer" id="trailer">
                <iframe width="60%" height="500" src={filme.trailerYoutubeEmbed} title={filme.titulo} frameBorder="0"></iframe>
            </div>
        </>
    )
}

export default Info