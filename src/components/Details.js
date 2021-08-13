import React from "react"

const DetailsForChar = (props) => {
  const { user } = props
  return (
    <div className="characterDiv">
      <p>{user.name}</p>
      <p>{user.gender}</p>
      <p>{user.height}</p>
      <p>{user.mass}</p>
      <p>{user.birth_year}</p>
      <p>{user.eye_color}</p>
      <p>{user.hair_color}</p>
      <p>{user.skin_color}</p>
    </div>
  )
}
export default DetailsForChar
