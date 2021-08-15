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

const DetailsForChar = (props) => {
  const { user } = props
  return (
    <StyledDetails>
      <h2>{user.name}</h2>
      <p>{user.gender}</p>
      <p>{user.height}</p>
      <p>{user.mass}</p>
      <p>{user.birth_year}</p>
      <p>{user.eye_color}</p>
      <p>{user.hair_color}</p>
      <p>{user.skin_color}</p>
    </StyledDetails>
  )
}
export default DetailsForChar
