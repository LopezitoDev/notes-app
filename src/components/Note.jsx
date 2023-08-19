import useNotes from '../hooks/useNotes'

function Note ({ title, completed, ID }) {
  const { removeNote, toggleEditing, toggleCompleted } = useNotes()

  return (
    <div
      className='
      bg-red-100 w-full p-1 m-0.5 flex items-center justify-between rounded-lg
    '
    >
      <p onClick={() => toggleCompleted(ID)} className={`${completed ? 'line-through text-gray-700' : 'text-black'} cursor-pointer`}>{title}</p>
      <div className='flex items-center justify-around w-16'>
        <img
          src='/pencil.svg' width={20}
          onClick={() => toggleEditing(ID)}
        />
        <img
          src='/trash.svg'
          width={20} onClick={() => removeNote(ID)}
          className='
            cursor-pointer
          '
        />
      </div>
    </div>
  )
}

export default Note
