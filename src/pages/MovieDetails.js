import { useEffect, useState } from "react"
import API from "../api/api"
import { useParams } from 'react-router-dom';
import { Movie } from "../components/Movie";

export function MovieDetails(props) {
  const [movie, setMovie] = useState([])
  let { id } = useParams()

  async function getMovie() {
    let moviedata = await API.Movie.get(id)
    setMovie(moviedata)
  }

  useEffect(() => { getMovie() }, [])

  return (
    <Movie movie={movie}/>
  )
}