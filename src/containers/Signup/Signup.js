import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FluidInput from '../../components/FuildInput/FluidInput'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Signup = ({setToken}) => {
  const [inputs, setInputs] = useState({})
  let Navigate = useNavigate()
  console.log('inside fucking signup')

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {name : inputs.name, email : inputs.email, password : inputs.password}
    // axios.post("http://localhost:6969/Register",user )
    //     .then(res=>console.log(res))
    setToken({name : user.name})
    localStorage.setItem('user', JSON.stringify({name : user.name}))
    Navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="title">
          Signup 
          </div>
          <FluidInput type="text" label="name" id="name" name="name" onChange={handleChange} />
          <FluidInput type="text" label="email" id="email" name="email" onChange={handleChange} />
          <FluidInput type="password" label="password" id="password" name='password' onChange={handleChange} />
          <Button type='submit' buttonText="Sign up" buttonClass="login-button" />
        </div>
      </form>
    </>
  )
}

export default Signup