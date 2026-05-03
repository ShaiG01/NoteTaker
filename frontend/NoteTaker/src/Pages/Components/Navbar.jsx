import React from 'react'
import { Link } from 'react-router'
import {Plus} from 'lucide-react'

const Navbar = () => {
  return (
    <header className='bg-gray-900/30 border-b border-base-content/10 w-full h-20 md:h-30 lg:h-20'>
        <div className='px-[4vw] md:px-[6vw] lg:px-[8vw] py-4 mx-auto w-full h-full flex items-center justify-between'>
            <h2 className="lg:text-[3vw] md:text-[4vw] text-[4vh] font-bold text-green-500">NoteTaker</h2>
            <button className='lg:p-[1vw] md:p-[2vw] p-[1vh] 
            flex justify-center items-center lg:w-[15vw] md:w-[20vw] w-[15vh] h-15 bg-green-500 rounded-[50px] text-base gap-4
            hover:cursor-pointer hover:scale-105 transition-all duration-300'>
                <Link to='/create' className='flex justify-center items-center w-full h-full'>
                <Plus className='size-5'/>
                <span>Add New Note</span>
                </Link>
            </button>
        </div>
    </header>
  )
}

export default Navbar