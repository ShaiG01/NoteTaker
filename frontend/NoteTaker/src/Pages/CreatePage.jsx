import {useState} from 'react'
import { useNavigate } from 'react-router'
import {ArrowLeftIcon} from 'lucide-react'
import { Link } from 'react-router'
import axios from 'axios'
import CreateForm from './Components/CreateForm.jsx'
import toast from 'react-hot-toast'



const CreatePage = () => {
  const [form, setForm] = useState({
    title: '',
    content: ''
  })

  const navigate =  useNavigate();

  const submitNote = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://notetaker-1-i6xh.onrender.com/api/notes',
        form
      );

      if (res.status === 201) {
        toast.success('Note Created Successfully!')
        navigate('/');
      }

    } catch (err) {
      if(err.response?.status === 429){
        toast.error('Too many requests. Try again later.')
      }

      if(err.response?.status === 500){
        toast.error('Internal Server Error.')
      }
    }
  };

  return (
    <div className='lg:text-[2vw] md:text-[3vw] text-[2vh] bg-black w-screen h-screen overflow-hidden flex flex-col items-center justify-start gap-[3vw]'>
      <header className="text-white w-full h-1/8 flex items-center justify-left p-10">

          <Link to='/' className='flex justify-left items-center hover:cursor-pointer'>
          <ArrowLeftIcon className="mr-4" />
          Back to Notes</Link>

    
      </header>

      <CreateForm formTitle={'Create a Note'} form={form} setForm={setForm} submit={submitNote} />
      
    </div>
  )
}

export default CreatePage