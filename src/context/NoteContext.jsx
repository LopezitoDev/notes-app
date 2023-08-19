import { createContext, useState } from 'react'

export const NoteContext = createContext({})

export function NoteContextProvider ({ children }) {
  const [notes, setNotes] = useState([])

  // useEffect(() => {

  // }, [])

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  )
}
