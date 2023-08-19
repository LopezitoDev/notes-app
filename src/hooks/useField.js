import { useState } from 'react'

const useField = ({ type, initialValue = '' }) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (evt) => setValue(evt.target.value)

  return {
    type,
    value,
    onChange
  }
}

export default useField
