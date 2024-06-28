import React from 'react'

const Contact = () => {
  return (
<div className='bg-indigo-600 w-full py-16 md:h-screen md:py-24 md:px-9'>
  <div className='text-center py-5'>
    <h1 className='text-3xl md:text-5xl text-white font-bold'>Drop us a Line.</h1>
    <p className='text-white font-semibold md:text-2xl mt-2'>Ask us a question, or just say Hello.</p>
  </div>

  <div className='flex flex-wrap justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <form className='flex flex-col space-y-4 md:space-y-0'>
        <div className='md:flex md:space-x-4'>
          <div className='flex flex-col w-full'>
            <label htmlFor='firstName' className='text-white text-sm mb-2'>First Name</label>
            <input type='text' id='firstName' name='firstName' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor='lastName' className='text-white text-sm mb-2'>Last Name</label>
            <input type='text' id='lastName' name='lastName' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
          </div>
        </div>
        <div className='md:flex md:space-x-4'>
          <div className='flex flex-col w-full'>
            <label htmlFor='email' className='text-white text-sm mb-2'>Email</label>
            <input type='email' id='email' name='email' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor='phone' className='text-white text-sm mb-2'>Phone</label>
            <input type='tel' id='phone' name='phone' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message' className='text-white text-sm mb-2'>Message*</label>
          <textarea id='message' name='message' className='border border-white rounded-2xl w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required></textarea>
        </div>
        <button type='submit' className='bg-white text-indigo-600 rounded-full py-3 px-6 text-sm font-semibold hover:bg-indigo-50 transition duration-300'>
          Submit
        </button>
      </form>

      <div className='flex items-center justify-center'>
        <img src='https://eskooly.com/assets/images/illustrations/drawings/line-city.svg' alt='Contact Illustration' className='max-w-full h-auto'/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact