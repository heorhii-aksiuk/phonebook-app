import React, { useId, useState } from 'react'

export default function SignupView() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'name') setName(value)
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = { name, email, password }
    console.log(user)
  }

  const id = useId()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id + '-name'}>Name</label>
        <input
          onChange={handleChange}
          id={id + '-name'}
          value={name}
          name="name"
          type="text"
          required
        />
        <label htmlFor={id + '-email'}>Email</label>
        <input
          onChange={handleChange}
          id={id + '-email'}
          value={email}
          name="email"
          type="email"
          required
        />
        <label htmlFor={id + '-password'}>Password</label>
        <input
          onChange={handleChange}
          id={id + '-password'}
          value={password}
          name="password"
          type="password"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}
