import { useParams } from "react-router-dom"
import Filmes from "../assets/database/Filmes"
import ScrollButton from "./ScrollButton";
import YoutubeTrailer from "./YoutubeTrailer";
import NotFound from "./NotFound";

const Info = () => {

    const { route } = useParams<{ route: string }>();

    const filme = Filmes.Filmes.find((f) =>
        f.route === route)

    if (!filme) {
        return <NotFound/>
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
                        <ScrollButton valor="Ver sessoes" nomeClasse="btnSessoes" id="sessoes" />
                        <ScrollButton valor="Assistir trailer" nomeClasse="btnTrailer" id="trailer" />
                    </div>
                </div>
            </div>
            
            <YoutubeTrailer title={filme.titulo} src={filme.trailerYoutubeEmbed} />
        </>
    )
}

export default Info