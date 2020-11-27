import { useEffect, useState } from "react"
import API from "../api/api"
import { useParams } from 'react-router-dom';
import { Movie } from "../components/Movie";

export function MovieDetails(props) {
  const [movie, setMovie] = useState([])
  
  let { id } = useParams()
  
  useEffect(
    () => { 
      async function getMovie() {
        let moviedata = await API.Movie.get(id)
        setMovie(moviedata)
      }
      getMovie()
       }, [id])

  return (
    <Movie movie={movie}/>
  )
}