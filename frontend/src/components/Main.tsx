import FilmesData from "../assets/data/FilmesData"
import { Link } from "react-router-dom"

const Main = () => {

    const data = FilmesData()

    return (
        <div className="home">
            <h1 className="hometitle">Filmes em Cartaz</h1>
            <div className="filmes">
                {data.filmes.map((filme) => (
                    <Link to={"/filme/" + filme.route}>
                        <div key={filme.id} className="filmeCartaz">
                            <img className="poster" src={filme.poster} alt={filme.titulo} />
                            <h2>{filme.titulo}</h2>
                            <p>{filme.ano} - {filme.diretor}</p>
                            <p><strong>Genero</strong> {filme.genero}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Main