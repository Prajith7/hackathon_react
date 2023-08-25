import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

function Login() {
  const Navigate = useNavigate();
  const submit=()=>{
    Navigate('/')
  }
  return (
    <>
    <div className='loginpage'>
    <div className='log-1'>
    <label >Username</label>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
    <div className='log-1'>
    <label >Password</label>
  <input type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
   <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={submit}>Button</button>
    </div>
   
    </>
   
  )
}

export default Login