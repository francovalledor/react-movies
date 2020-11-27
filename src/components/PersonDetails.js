import { MovieCard } from "./MovieCard";

export function PersonDetails(props) {
    let person = props.person
    function renderMovies() {
            let movies = []
            if (props.person !== {}) {
                if (props.person.movies){
                    
                    if(props.person.movies.cast){
                        person.movies.cast.forEach(movie => movies.push(movie));
                    }
                    
                    if (props.person.movies.crew){
                        person.movies.crew.forEach(movie => movies.push(movie));
                    }
                }
            }
            return movies.map(movie => <MovieCard movie={movie}/>)
        }

    return (
        <div className="row justify-content-center text-center m-2 p-2">
            <div className="card person-card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={person.profile} className="card-img" alt={person.name + ' photography' }/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.biography}</p>
                        <p className="card-text">Birth: {person.birthday} {person.place_of_birth}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h4 className="text-center">{person.name}'s movies</h4>
            <div className="row cards-deck m-2">
                <div className="justify-content-center text-center card-group">
                    {renderMovies()}
                </div>
            </div>
        </div>
        </div>
      )
    }

export default PersonDetails