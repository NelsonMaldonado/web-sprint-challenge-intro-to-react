import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import { response } from "msw"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [user, setUser] = useState({
    name: "Character 1",
    gender: "male",
    height: "over 10 meters",
    mass: "100kg",
    birth_year: "2000",
    eye_color: "blue",
    hair_color: "grey",
    skin_color: "new color",
  })

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacters] = useState([])
  useEffect(() => {
    axios("https://swapi.dev/api/people").then((response) => {
      console.log(response)
      setCharacters(response.data[0])
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters working</h1>
    </div>
  )
}

export default App
