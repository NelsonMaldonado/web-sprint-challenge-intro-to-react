import React from "react"
import styled from "styled-components"

const StyledDetails = styled.div`
  margin: auto;
  color: white;
  width: 60%;
  flex-direction: column;
  padding: 10px 0 10px 0;
  border-radius: 10px;
  background-color: ${(pr) => pr.theme.primaryColor};
`
const StyledCharacters = styled.div`
  margin: auto;
  width: 70%;
  padding-top: 20px;
  border: 1px solid black;
  transition: all 0.05s ease-in-out;
  &:hover {
    backgroud-color: ${(pr) => pr.theme.secondaryColor};
    color: black;
  }
`

const DetailsForChar = (props) => {
  const { character } = props
  return (
    <StyledDetails>
      {character.map((char, key) => {
        console.log(key)
        return <StyledCharacters>{char.name}</StyledCharacters>
      })}
      {/* <p>{user.gender}</p>
      <p>{user.height}</p>
      <p>{user.mass}</p>
      <p>{user.birth_year}</p>
      <p>{user.eye_color}</p>
      <p>{user.hair_color}</p>
      <p>{user.skin_color}</p> */}
    </StyledDetails>
  )
}
export default DetailsForChar
