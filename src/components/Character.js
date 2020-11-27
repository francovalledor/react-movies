import { Link } from "react-router-dom"

export function Character(props) {
    let character = props.character

    return (
        <div className="card promoting-card m-2 shadow-sm character-card text-center" style={{minWidth: "15rem"}}>
            <div className="card-body d-flex flex-row">
                <div >
                    <h4 className="card-title font-weight-bold mb-2">{character.name}</h4>
                    <p className="card-text">{character.character ? ('is ' + character.character) : ''}</p>
                </div>
            </div>
            <Link to={"/person/" + character.personID}>
                <div className="view overlay">
                    <img data-href="{router.urlFor(Person, {id: character.personID})}"
                        className="card-img-top rounded-0"
                        src={character.profile}
                        alt="is {character.character}"
                        />
                </div>
            </Link>
        </div>
      )
    }