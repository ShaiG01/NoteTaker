import { Routes, Route } from 'react-router'

import HomePage from './Pages/HomePage.jsx'
import CreatePage from './Pages/CreatePage.jsx'
import NoteDetailPage from './Pages/NoteDetailPage.jsx'

import './App.css'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}