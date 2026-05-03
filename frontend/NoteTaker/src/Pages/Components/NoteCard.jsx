import React from 'react'
import { Edit, Delete } from 'lucide-react'
import {Link} from 'react-router'

const NoteCard = ({key, note, removeCard}) => {
  return (
    <div className=" border-t-[3px] border-green-500 lg:p-[2vw] md:p-[3vw] p-[2vh] flex flex-col justify-between items-start gap-4
    lg:w-[25vw] md:w-[40vw] w-[35vh] h-[20vh] lg:h-[15vw] md:h-[25vw]  bg-gray-800 rounded-[10px]">
        <div className='text-[2vw] flex flex-col'>
            <span className='text-gray-200 lg:text-[2vw] md:text-[3vw] text-[3vh] font-bold'>{note.title.length > 20 ? note.title.substring(0, 20) + '...' : note.title}</span>
            <span className="text-gray-400 lg:text-[1.3vw] md:text-[2.3vw] text-[2vh]">
            {note.content.length > 25 ? note.content.substring(0, 25) + '...' : note.content}
            </span>
            </div>
        <div className='flex justify-between items-bottom w-full'>
            <span className='lg:text-[1vw] md:text-[2vw] text-[1vh] text-gray-500 '>
                {new Date(note.createdAt).toDateString()}</span>
            <div className='w-1/4 h-full  flex justify-center items-right gap-3'>
            
            <Link to={`/note/${note._id}`} className="hover:cursor-pointer hover:scale-110 transition-all ease">
            <Edit />
            </Link>

            <Delete onClick={() => removeCard(note._id)} className="text-red-500 
            hover:cursor-pointer hover:scale-110 transition-all ease"/>
            </div>
        </div>
    </div>
  )
}

export default NoteCard