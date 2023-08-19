import useNotes from '../hooks/useNotes'
import useField from '../hooks/useField'

function AddNoteForm () {
  const { addNewNote } = useNotes()
  const noteTitle = useField({ type: 'text' })

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const { value } = noteTitle

    addNewNote({
      title: value,
      completed: false,
      editing: false
    })

    evt.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='rounded-lg rounded-r-none p-1 transition w-72
          focus:scale-110'
        {...noteTitle}
        placeholder='Escribe aquí tu nota'
      />
      <button
        className='bg-orange-700 rounded-lg rounded-l-none font-bold text-white p-1 transition
            hover:bg-red-950 active:scale-110'
      >Add Note!
      </button>
    </form>
  )
}

export default AddNoteForm
