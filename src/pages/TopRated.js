import { useEffect, useState } from "react"
import API from "../api/api"
import { Movies } from "../components/Movies"

export function TopRated() {
  const [movies, setMovies] = useState([])
  
  async function getMovies(){
      let topRatedMovies = await API.Movies.getTopRated()
      setMovies(topRatedMovies)
  }

  useEffect(() => {getMovies()}, [])
  
    return (
        <Movies movies={movies}/>
        )
}