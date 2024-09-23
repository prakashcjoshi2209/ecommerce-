import React from 'react'

export const NewletterBox = () => {

     const onsubmithandle =(e)=>{
    e.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% off </p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, voluptatibus?
        </p>
        <form className='w-full sm:w1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your email' required />
            <button onSubmit={onsubmithandle} type='submit' className='bg-black text-white text-xs  px-10 py-4'>SUBCRIBE</button>
        </form>
    </div>
  )
}
