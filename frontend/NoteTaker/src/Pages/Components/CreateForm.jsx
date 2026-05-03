import React from 'react'

const CreateForm = ({formTitle, form, setForm, submit}) => {
  return (
    <>
    <form 
      onSubmit={submit}
      className='lg:w-1/2 md:w-3/4 md:h-3/4 lg:h-full w-3/4 h-1/2 flex flex-col items-left bg-gray-900/40 rounded-lg justify-start lg:gap-[2vw] md:gap-[3vw] gap-[2vh]
      lg:p-[2vw] md:p-[3vw] p-[2vh]'>
      <h1 className='lg:text-[2vw] md:text-[3vw] text-[2vh] text-white font-bold'>{formTitle}</h1>

      <div className='w-full h1/4 flex flex-col justify-center items-left lg:text-[1.5vw] md:text-[2.5vw] text-[2vh] lg:px-[2vw] md:px-[3vw] px-[2vh]'>
        <label className='text-white block mb-2'>Title</label>
        <input 
        value = {form.title ? form.title : ""}
        onChange = {(e)=> setForm({...form, title:e.target.value})}
        type="text" className='w-full p-2 rounded-[50px] text-white border-white border-[2px] focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Enter note title...' />
      </div>

      <div className='w-full h1/4 flex flex-col justify-center items-left lg:text-[1.5vw] md:text-[2vw] text-[1.5vh] lg:px-[2vw] md:px-[3vw] px-[2vh]'>
        <label className='text-white block mb-2'>Content</label>
        <textarea 
        value = {form.content ? form.content : ""}
        onChange = {(e)=> setForm({...form, content:e.target.value})}
        className='w-full lg:h-3/4 h-[10vh] text-justify
        p-[3vw] rounded-[50px] text-white border-white border-[2px] focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Enter note content...' />
      </div>

      <div className='w-full h-1/2 flex justify-end items-center lg:px-[2vw] md:px-[3vw] px-[2vh]'>
        <button 
        disabled={!form.title || !form.content}
        type='submit'
        className='lg:text-[1.5vw] md:text-[2vw] text-[2vh] disabled:bg-green-500/40 disabled:cursor-not-allowed disabled:scale-100
        w-1/2 lg:h-1/2 md:h-1/2 h-1/2 bg-green-500 rounded-[50px] text-black text-[1.5vw] hover:cursor-pointer hover:scale-105 transition-all duration-300'>
          Submit
        </button>
      </div>
      </form>
    </>
  )
}

export default CreateForm