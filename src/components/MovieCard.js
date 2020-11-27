import { Link } from "react-router-dom"

export function MovieCard(props) {
    const moviedata = props.movie

    function MovieTemplate(movie){
        const template = (
        <div className="card m-2 movie-card" style={{minWidth: "15rem", maxWidth: "50rem"}}>
            <Link to={'/movies/' + movie.id}>
                <img className="card-img-top" src={movie.poster} alt="movie poster" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview.slice(0,100)}...</p>
            </div>
        </div>
        )

    return template
    }

    return MovieTemplate(moviedata)
}