import React from 'react'
import { FaFacebookF, FaLinkedin, FaGoogle, FaRegEnvelope} from "react-icons/fa"
import { MdLockOutline,  } from "react-icons/md"
import { AiOutlineUserAdd } from "react-icons/ai"
import CompanyName from './CompanyName'

const ForgotPassword = () => {
  return (
    <>
        <main className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center">
       <div className='bg-white shadoww-2xl rounded-2xl flex w-2/3 max-w-4xl'>

         {/* All content here is for the left section */}
          <div className='w-3/5 p-5'>
          <CompanyName />
            <div className='py-10'>
              <h2 className='text-green-700 text-3xl font-bold mb-1 py-5'>
                  <span className='inline-block'><MdLockOutline /></span> Forgot Password</h2>
              <div className='border-2 mb-2 w-10 border-green-700 inline-block'></div>
              {/* Social login sections with Icons */}
              {/* <div className='flex justify-center my-2'>
                <a href="#" className='border-2 border-gray-200 p-3 rounded-full mx-1'>
                  <FaFacebookF  className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 p-3 rounded-full mx-1'>
                  <FaLinkedin  className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 p-3 rounded-full mx-1'>
                  <FaGoogle  className='text-sm'/>
                </a>
              </div> */}
              {/* <p className='text-gray-500 mb-2 my-3'>Or Use your Email Address</p> */}
              <div className='flex flex-col items-center mt-4'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope  className='text-gray-400 m-2' />
                  <input type="email" name='email' placeholder='Email'  className='bg-gray-100 text-sm flex-1 outline-none' />
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className="flex items-center text-xs">
                    {/* <input type="checkbox" name='remember'  className='m-1'/>Remember me */}
                  </label>
                  <a href="/user/signyp" className='text-xs font-bolder m-1 hover:underline'>Sign Up New Account</a>
                </div>

                <a href='#' className='border-2 border-green-700 px-12 py-2 rounded-full inline-block font-semibold hover:bg-green-700 hover:text-white'> Recover Password</a>
              </div>
              
            </div>
          </div>


          {/* This section is the right sections */}
          <div className='w-2/5 p-5 bg-green-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h4 className='text-2xl mb-8 font-bold'>Remembered Your Passsword?</h4>
            <div className='inline-block mb-2 border-2 w-10 text-white'></div>
            <p className='mb-10'></p>
         
            <a href='/user/signin' className='border-2 
                                         border-white 
                                         px-12 py-2 
                                         rounded-full inline-block 
                                         font-semibold hover:bg-white 
                                         hover:text-green-700'> Sign In</a>
        
          </div>
       </div>
      </main>
    </>
  )
}

export default ForgotPassword