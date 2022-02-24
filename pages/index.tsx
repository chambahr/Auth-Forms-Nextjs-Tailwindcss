import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaFacebookF, FaLinkedin, FaGoogle, FaRegEnvelope} from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"

import Footer from "../components/Footer"
import CompanyName from "../components/CompanyName"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
     

      <main className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center">
       <div className='bg-white shadoww-2xl rounded-2xl flex w-2/3 max-w-4xl'>

         {/* All content here is for the left section */}
          <div className='w-3/5 p-5'>
           <CompanyName />
            <div className='py-10'>
              <h2 className='text-green-700 text-3xl font-bold mb-1'>Sign In To Account</h2>
              <div className='border-2 mb-2 w-10 border-green-700 inline-block'></div>
              {/* Social login sections with Icons */}
              <div className='flex justify-center my-2'>
                <a href="#" className='border-2 border-gray-200 p-3 rounded-full mx-1'>
                  <FaFacebookF  className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 p-3 rounded-full mx-1'>
                  <FaLinkedin  className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 p-3 rounded-full mx-1'>
                  <FaGoogle  className='text-sm'/>
                </a>
              </div>
              <p className='text-gray-500 mb-2 my-3'>Or Use your Email Address</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope  className='text-gray-400 m-2' />
                  <input type="email" name='email' placeholder='Email'  className='bg-gray-100 text-sm flex-1 outline-none' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center'>
                  <MdLockOutline  className='text-gray-400 m-2' />
                  <input type="password" name='password' placeholder='Password'  className='bg-gray-100 text-sm flex-1 outline-none' />
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name='remember'  className='m-1'/>Remember me
                  </label>
                  <a href="#" className='text-xs m-1 hover:underline'>Forgot Password</a>
                </div>

                <a href='#' className='border-2 border-green-700 px-12 py-2 rounded-full inline-block font-semibold hover:bg-green-700 hover:text-white'> Sign In</a>
              </div>
              
            </div>
          </div>


          {/* This section is the right sections */}
          <div className='w-2/5 p-5 bg-green-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl mb-8 font-bold'>Hello, Friend!</h2>
            <div className='inline-block mb-2 border-2 w-10 text-white'></div>
            <p className='mb-10'>Fill out your information below and start this amazing journey with Us</p>
         
            <a href='/user/signup' className='border-2 
                                         border-white 
                                         px-12 py-2 
                                         rounded-full inline-block 
                                         font-semibold hover:bg-white 
                                         hover:text-green-700'> Sign Up</a>
        
          </div>
       </div>
      </main>

     <Footer />
    </div>
  )
}

export default Home
