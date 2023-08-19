import useField from '../hooks/useField'
import useNotes from '../hooks/useNotes'

function EditingNote ({ title, ID }) {
  const { editNote } = useNotes()
  const editingNote = useField({ type: 'text', initialValue: title })

  return (
    <div
      className='
      bg-white w-full p-1 m-0.5 flex items-center justify-between rounded-lg
    '
    >
      <input
        autoFocus
        {...editingNote}
        className='w-full'
      />
      <div className='flex items-center justify-around w-16'>
        <img
          src='/save.svg' width={20}
          onClick={() => editNote(ID, { title: editingNote.value })}
        />
      </div>
    </div>
  )
}

export default EditingNote
