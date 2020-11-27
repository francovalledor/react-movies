import { useEffect, useState } from "react"
import API from "../api/api"
import { useParams } from 'react-router-dom';
import {PersonDetails} from "../components/PersonDetails";

export function Person(props) {
  const [person, setPerson] = useState({})
  let { id } = useParams()

  
  useEffect(() => { 
    
    async function getCharacter() {
      let persondata = await new API.Person(id).getDetails()
      setPerson(persondata)
    }
    getCharacter() 
  }, [id])

  return (
  <div className="container p-4">
    <PersonDetails person={person}/>
  </div>
  )
}