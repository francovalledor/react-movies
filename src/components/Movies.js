import {MovieCard} from './MovieCard';

export function Movies(props) {
       function renderMovies() {
        return props.movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
    }    

    return (
        <div className="row cards-deck m-2">
        <div className="justify-content-center text-center card-group">    
            {renderMovies()}
        </div>
        </div>
        )
}

