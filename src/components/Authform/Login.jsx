import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="w-full min-h-screen flex items-center justify-center loginpage">
        <div className="w-[32%] h-auto py-10 px-12 rounded-xl logincard">
            <div className="w-full h-auto">
                <h1 className="text-[1.475rem] text-white font-semibold mb-1">Sign In</h1>
                <p className="text-sm text-gray-300 font-normal mb-8">Welcome back, you've been missed.</p>
            </div>
            <div className="w-full h-auto flex items-center gap-7">
              <div className="w-1/2 h-auto">
              <button className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white rounded-md flex items-center justify-center gap-x-2 hover:bg-gray-100/10 ease-out duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google text-base text-white" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>
Google
              </button>
              </div>
              <div className="w-1/2 h-auto">
              <button className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white rounded-md flex items-center justify-center gap-x-2 hover:bg-gray-100/10 ease-out duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-base text-white" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
Facebook
              </button>
              </div>
            </div>
            <div className="w-full h-auto flex items-center gap-x-1 my-5">
                <div className="w-1/2 h-[1.5px] bg-gray-200/40 rounded-md"></div>
                <p className="text-sm text-gray-300 font-normal px-2">OR</p>
                <div className="w-1/2 h-[1.5px] bg-gray-200/40 rounded-md"></div>
            </div>
            <div className="w-full h-auto mb-5">
                <label htmlFor="username" className="block text-white mb-1">Username</label>
                <input type="text" id="username" className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white rounded-md" placeholder="Enter your username" />
            </div>
            <div className="w-full h-auto mb-5">
                <label htmlFor="password" className="block text-white mb-1">Password</label>
                <input type="password" id="password" className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white rounded-md" placeholder="Enter your password" />
            </div>
            <div className="w-full h-auto flex items-center justify-between mb-5">
                <div className="flex items-cemter gap-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4 accent-gray-200/20 border border-gray-200/20 rounded-md text-white" />
                <label htmlFor="remember" className="text-[0.875rem] text-white">
                    Remember me
                </label>
                </div>
                <div className="w-auto h-auto">
                <Link className="text-white text-sm font-medium hover:underline ease-out duration-500">
                Forgot Password?
                </Link>

            </div>
            </div>
            <button className="w-full h-12 outline-none bg-white rounded-md text-lg text-black font-medium mb-7">
                Sign In
            </button>
            <div className="w-full h-auto flex item-center justify-center gap-x-1">
                <p className="text-black text-sm font-medium">
                    Don't have an account?
                </p>
                <Link className='text-black text-base font-medium hover:underline ease-out duration-500'>
                Create New Account
                </Link>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Login