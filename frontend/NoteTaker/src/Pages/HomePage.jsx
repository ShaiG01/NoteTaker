import {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import RateLimitedUI from './Components/RateLimitedUI.jsx'
import axios from 'axios'
import {LucideMessageCircleWarning} from 'lucide-react'
import NoteCard from './Components/NoteCard.jsx'


const HomePage = () => {
    const [status, setStatus] = useState('loading')
  
    const [notes, setNotes] = useState([])

    const removeCard = async(id)=>{
      try{
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));

        const res = await axios.delete(`https://notetaker-bc1v.onrender.com/api/notes/${id}`)

        if(res.status === 200){
          console.log(`${id} deleted successfully`)
        } 

    
      } catch(err){
        if(err.response?.status === 429){
          setStatus('rateLimited')
          console.log("Rate limit reached. Please wait before making more requests.")
        }

      if(err.response?.status === 500){
          setStatus('serverError')
          console.log("Server error. Please try again later.")
      }

      if(err.response?.status === 404){  
        console.log("Note not found. It may have already been deleted.")
      }
    }
  }

    const getData = async()=>{
      setStatus
      const data = await axios.get('https://notetaker-bc1v.onrender.com/api/notes')
      return data
    }

  
  
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await getData()

        console.log("RESPONSE:",res)

        if(res.status === 200){
          setStatus('projects')
          const data = res.data
          console.log("DATA:",data)
          setNotes(data)
          console.log("NOTES:",notes)
        }

      } catch(err){
        console.log("ERROR:",err)
        if(err.response?.status === 429){
          setStatus('rateLimited')
          console.log("Rate limit reached. Please wait before making more requests.")
        }

        if(err.response?.status === 500){
          setStatus('serverError')
          console.log("Server error. Please try again later.")
      }
    }


  }

   fetchData()

  }, [])


  return (
    <div className="bg-black w-screen min-h-screen flex flex-col items-center justify-top gap-[5vw] overflow-x-hidden 
max-w-full">
      <Navbar />

      {status === 'rateLimited' && 
      <div className='lg:w-[80vw] md:w-[85vw] w-[50vh] lg:h-[20vw] md:h-[30vw] h-[30vh] p-10'>
            <RateLimitedUI />
        </div>}
    

      {status === 'serverError' &&
      <div className='text-white text-[3vw] flex items-center justify-center w-screen h-screen'>
        <LucideMessageCircleWarning className='size-[3vw] 500/80 mr-4 animate-pulse' />
        INTERNAL SERVER ERROR: 5000. Try again in a few seconds. </div>
      }

      {status === 'loading' && 
      <div className='text-white text-[3vw] flex items-center justify-center w-screen h-screen'>
        Loading...
      </div>
      }

      {status === 'projects' &&
      <div className='p-10 text-white w-full h-full flex justify-center items-center'>
        {notes.length > 0 ? (
          <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 grid-cols-1 lg:gap-4 md:gap-7 gap-4 w-full h-1/2 px-[5vw] place-items-center'>
           {notes.map((note,i)=>(
            <NoteCard key={i} note={note} removeCard={removeCard} />
           ))}
          </div>
          
        ): (
          <div className='text-white text-[3vw] flex items-center justify-center w-screen h-screen'>
            No notes found. Create your first note to get started!
          </div>
        )}
      </div>
      }
    </div>
  )
}

export default HomePage