import Filmes from "../assets/database/Filmes"

const Home = () => {
    return <div className="home">
        <h1 className="hometitle">Filmes em alta</h1>
        <div className="filmes">
            {Filmes.Filmes.map((filme) => (
                <div key={filme.id} className="filmeCartaz">
                    <img className="poster" src={filme.poster} alt={filme.titulo} />
                    <h2>{filme.titulo}</h2>
                    <p>{filme.ano} - {filme.diretor}</p>
                    <p><strong>Genero</strong> {filme.genero}</p>
                </div>
            ))}
        </div>
    </div>
}

export default Home