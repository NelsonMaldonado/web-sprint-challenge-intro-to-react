import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import DetailsForChar from "./components/Details"
import Character from "./components/Character"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
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

  const openDetails = (id) => {
    setCharacters(id)
  }
  const closeDetails = () => {
    setCharacters(null)
  }

  useEffect(() => {
    axios("https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data)
        console.log(`Here's your response`, character)
      })
      .catch((err) => {
        console.error(err)
      })

    const { name, mass } = user
    console.log(name)
    console.log(mass)
  }, [])

  return (
    <div className="App">
      <h1>Characters</h1>
      <div>
        <Character character={character} />
        <DetailsForChar user={user} />
      </div>
    </div>
  )
}

export default App
