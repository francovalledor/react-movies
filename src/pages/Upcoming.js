import { useEffect, useState } from "react"
import API from "../api/api"
import { Movies } from "../components/Movies"

export function Upcoming() {
  const [movies, setMovies] = useState([])
  
  async function getMovies(){
      let upcomingMovies = await API.Movies.getUpcoming()
      setMovies(upcomingMovies)
  }

  useEffect(() => {getMovies()}, [])
  
    return (
        <Movies movies={movies}/>
        )
}