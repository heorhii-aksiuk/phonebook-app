import { useState, useId } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/user/operations'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = { email, password }
    dispatch(login(user))
    setEmail('')
    setPassword('')
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
