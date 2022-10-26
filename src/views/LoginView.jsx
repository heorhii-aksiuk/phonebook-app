import { useState, useId } from 'react'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = { email, password }
    console.log(user)
  }

  const id = useId()
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
