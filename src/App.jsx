import './App.css'
import AddNoteForm from './components/AddNoteForm'
import NoteList from './components/NoteList'
import { NoteContextProvider } from './context/NoteContext'

function App () {
  return (
    <NoteContextProvider>
      <div
        className='min-h-screen bg-yellow-400 flex flex-col items-center justify-center'
      >
        <h1 className='text-6xl m-6 font-bold'>Notes App</h1>
        <AddNoteForm />
        <NoteList />
      </div>
    </NoteContextProvider>
  )
}

export default App
