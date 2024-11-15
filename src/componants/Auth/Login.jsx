import React, { useState, useSyncExternalStore } from 'react'

const Login = ({handleLogin}) => {
   

   const [email, setEmail] = useState('')
   const [password,  setPassword]= useState('')

   const submitHandler=(e)=>{
    e.preventDefault()
     handleLogin(email , password)
    setEmail("")
    setPassword("")

  }

  return (
    <div className=' h-screen w-screen flex items-center justify-center '>
      
      <div className='border  border-emerald-600 p-20 rounded-xl'>
        <form 
         onSubmit={(e)=>{
            submitHandler(e)
         }}
        className='flex flex-col items-center justify-center' >
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
             className='outline-none  bg-transparent border-2 border-emerald-600 rounded-full px-3 py-1 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required 
            className='outline-none  bg-transparent border-2 border-emerald-600 rounded-full px-3 py-1 mt-2  placeholder:textgray-400' type="password" placeholder='Enter your password' />
            <button className=' bg-emerald-600 px-5 py-2 rounded-full mt-5' type='submit'>Login</button>
        </form>

      </div>

    </div>
    
  ) 
}

export default Login