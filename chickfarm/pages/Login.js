import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { login } from '@/state/Actions/UserActions'

function Login() {
  const [name, SetName] = useState('')

  const [password, Setpassword] = useState('')

  //const userLogin = useSelector(state=> state.user)
 // const {isSuccess,isRequest,errorMessage, data} = userLogin
  const router = useRouter();

 {/* useEffect(()=>{
    if(data){
      router.push('/dashboard')
      dispatch(login(email,password))


    }

  },[data])
*/}
  const submitHandler = (e)=>{
    e.preventDefault();
    //dispatch(login(name,password))
    console.log('hello')
    
  }
  return (
    <div className='my-28 container mx-auto'>

        <div className='text-center text-4xl font-medium'>
            <h2>Login</h2>
        </div>
        
<form className=''onSubmit={submitHandler}>
     
      
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-6">
   
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>




    </div>
  )
}

export default Login