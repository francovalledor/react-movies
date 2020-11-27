import { useEffect, useState } from "react"
import API from "../api/api"
import { Movies } from "../components/Movies"

export function Popular() {
  const [movies, setMovies] = useState([])
  
  async function getMovies(){
      let popularMovies = await API.Movies.getPopular()
      setMovies(popularMovies)
  }

  useEffect(() => {getMovies()}, [])
  
    return (
        <Movies movies={movies}/>
        )
}