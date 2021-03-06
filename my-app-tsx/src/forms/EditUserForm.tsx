import React, { useState, useEffect } from 'react'

const EditUserForm = (props: any) => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <br></br>
      <div className="btn-cover">
      <button className="update-btn">Update user</button>
      </div>
      {/* <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button> */}
    </form>
  )
}

export default EditUserForm
