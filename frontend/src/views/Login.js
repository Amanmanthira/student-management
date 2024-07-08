import React from 'react';

const Login = () => {
  return (
    <div className='bg-blue-400 h-screen  flex flex-col md:flex-row'>
                {/* Login Side */}
          <div className='flex-1 flex flex-col justify-center items-center p-4'>
            <h1 className='text-white text-5xl mb-4'>Login</h1>
            <input type='text' placeholder='Email' className='w-full max-w-md px-4 py-2 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
            <input type='password' placeholder='Password' className='w-full max-w-md px-4 py-2 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
            <button className='w-auto max-w-md px-4 py-2 mt-4 bg-white text-blue-400  hover:bg-blue-500 rounded-2xl'>Login</button>
            <p className='text-center mt-4 text-white'>Don't have an account? Sign up</p>
          </div>
                  {/* Image side */}
          <div className="flex-1 flex justify-center items-center p-4 bg-cover bg-center bg-no-repeat max-sm:hidden"
            style={{ backgroundImage: "url('./assests/loginimg.jpg')" }}>
          </div>
    </div>
  );
};

export default Login;
