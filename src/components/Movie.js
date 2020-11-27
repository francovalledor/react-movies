import { Character } from "./Character"

export function Movie(props) {
    const moviedata = props.movie
    function renderCharacters(){

        if (props.movie.cast) {
            return props.movie.cast.map(
                character => <Character character={character} key={character.personID}/>
            )
        }
    }

    const renderGenres = () => {
        let genres = ''
        if (props.movie.genres) {
            genres =props.movie.genres.join('  ')
        }

        return genres
    }

    function renderDirector() {
        let director = ''

        if (props.movie.crew) {
            director = props.movie.crew.filter(crew => crew.job==='Director')[0].name
        }

        return (director ? "Director: " + director: "")
    }

    function MovieDetailsTemplate(movie) {
        const template = (
            <div className="container">
                <div className="row justify-content-center text-center m-2 p-2">
                    <div className="card mb-3 movie-details-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={movie.poster} className="card-img" alt={movie.title + ' poster'}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <p className="card-text">{movie.overview}</p>
                                    <p className="card-text">Genres: {renderGenres()} </p>
                                    <p className="card-text">{renderDirector()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4 className="text-center">Cast</h4>
                    <div className="row cards-deck m-2">
                        <div className="justify-content-center text-center card-group">
                            {renderCharacters()}
                        </div>
                    </div>
                </div>
            </div>
        )

        return template
    }

    return MovieDetailsTemplate(moviedata)
}