import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'

import generateUniqueID from 'generate-unique-id'

const useNotes = () => {
  const { notes, setNotes } = useContext(NoteContext)

  const addNewNote = (note) =>
    setNotes([...notes, { ...note, ID: generateUniqueID() }])

  const removeNote = (noteID) =>
    setNotes(notes.filter(note => note.ID !== noteID))

  const searchNote = (noteID) =>
    notes.findIndex(note => note.ID === noteID)

  const toggleEditing = (noteID) => {
    const notesArray = [...notes]
    const indexNoteToToggle = notesArray.findIndex(note => note.ID === noteID)

    notesArray.at(indexNoteToToggle).editing = !notesArray.at(indexNoteToToggle).editing
    setNotes(notesArray)
  }

  const editNote = (noteID, { title }) => {
    const notesArray = [...notes]
    const indexNoteToModify = notesArray.findIndex(note => note.ID === noteID)

    notesArray.at(indexNoteToModify).editing = false

    notesArray.at(indexNoteToModify).title = title

    setNotes(notesArray)
  }

  const toggleCompleted = (noteID) => {
    const notesArray = [...notes]
    const indexNoteToToggle = notesArray.findIndex(note => note.ID === noteID)

    notesArray.at(indexNoteToToggle).completed = !notesArray.at(indexNoteToToggle).completed
    setNotes(notesArray)
  }

  return {
    notes,
    addNewNote,
    removeNote,
    toggleCompleted,
    searchNote,
    toggleEditing,
    editNote
  }
}

export default useNotes
