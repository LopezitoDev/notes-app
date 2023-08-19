import useNotes from '../hooks/useNotes'
import Note from './Note'
import EditingNote from './EditingNote'

function NoteList () {
  const { notes } = useNotes()

  console.log(notes)

  return (
    <div className='w-96 m-2 flex flex-col items-center justify-center'>
      {notes.length !== 0
        ? notes.map(note => (
          note.editing ? <EditingNote {...note} key={note.ID} /> : <Note {...note} key={note.ID} />
        ))
        : (
          <p>No notes</p>
          )}
    </div>
  )
}

export default NoteList
