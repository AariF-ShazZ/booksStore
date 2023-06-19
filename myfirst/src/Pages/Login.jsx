import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/AuthReducer/actions'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location  = useLocation()
  console.log("Location in Login => ",location);
  const comingFrom = location.state?.data || "/"
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email && password){
      dispatch(login({email,password})).then((res) =>{
        navigate(comingFrom,{replace:true})
      }).catch((err) =>  console.log("Login Fail"))
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">User Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">User Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}

export default Login