import {useState, useEffect} from 'react'
import { useParams, useNavigate, Link} from 'react-router'
import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import CreateForm from './Components/CreateForm.jsx';
import toast from 'react-hot-toast';

const NoteDetailPage = () => {
  const {id} = useParams();

  const [form, setForm] = useState({
    title: '',
    content: ''
  })

const navigate = useNavigate();

const updateNote = async (e) => {
  e.preventDefault()
  try {
      const res = await axios.put(
        `https://notetaker-bc1v.onrender.com/api/notes/${id}`,
        form
      );

      if (res.status === 200) {
        toast.success('Note updated successfully!')
        navigate('/');
      }

      console.log(res.status)

    } catch (err) {
      if(err.response?.status === 429){
        console.log('Too many requests, try again later.')
        toast.error('Too many requests. Try again later.')
      }

      if(err.response?.status === 404){
          console.log("Note not found")
        }

      if(err.response?.status === 500){
          console.log("Internal Server Error")
          toast.error('Internal Server Error:5000')
        }
    }
  };

  useEffect(()=>{
    const fetchNoteData = async()=>{
      try{
         const res = await axios.get(`https://notetaker-bc1v.onrender.com/api/notes/${id}`)

         if(res.status === 200){
          console.log('Note Data:', res.data)
          setForm(res.data)
         } 
 
      } catch(err){
        if(err.response?.status === 429){
          console.log('Too many requests. Try again later?')
        }

        if(err.response?.status === 404){
          console.log("Note not found")
        }
      }
    };

    fetchNoteData()
  }, [id]);

  return (
    <div className='lg:text-[2vw] md:text-[3vw] text-[2vh] bg-black w-screen h-screen overflow-hidden flex flex-col items-center justify-start gap-[3vw]'>
      <header className="text-white w-full h-1/8 flex items-center justify-left p-10">

          <Link to='/' className='flex justify-left items-center hover:cursor-pointer'>
          <ArrowLeftIcon className="mr-4" />
          Back to Notes</Link>

    
      </header>

      <CreateForm formTitle={'Update Note'} form={form} setForm={setForm} submit={updateNote} />
      
    </div>
  )
}

export default NoteDetailPage