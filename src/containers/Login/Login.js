import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import FluidInput from '../../components/FuildInput/FluidInput'
import Button from '../../components/Button/Button'

const Login = ({setToken}) => {
  const [inputs, setInputs] = useState({})
  let Navigate = useNavigate()

  const handleChange = (e) => {
    setInputs({...inputs , [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {name : inputs.name, password : inputs.password }
    // axios.post("http://localhost:6969/Login", user)
    //   .then(res => {
    //       alert(res.data.message)
    //   })
    setToken({name : user.name})
    localStorage.setItem('user', JSON.stringify({name : user.name}))
    Navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="title">
          Login
          </div>
          <FluidInput type="text" label="name" id="name" name="name" onChange={handleChange} />
          <FluidInput type="text" label="password" id="password" name='password' onChange={handleChange} />
          <Button type='submit' buttonText="Sign in" buttonClass="login-button" />
        </div>
        <p className="forgot-password text-right">
            Forgot
        </p>
      </form>
    </>
  )
}

export default Login