import { useContext, useEffect } from 'react'

import Context from './Context'

export default function useGroupValue({ key, value, defaultValue }) {
  const { contextValue, setContextValue } = useContext(Context)

  useEffect(() => {
    if (!contextValue[key]) {
      setContextValue({
        ...contextValue,
        [key]: defaultValue,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])

  function onValueChange(value) {
    setContextValue({
      ...contextValue,
      [key]: value,
    })
  }

  return [value || contextValue[key], onValueChange]
}
