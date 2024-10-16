import { useContext, useEffect } from 'react'
import { isUndefined } from '@/utils/is'

import Context from './Context'

export default function useContextMenuValue({ name, value, defaultValue }) {
  const { contextValue, setContextValue } = useContext(Context)

  useEffect(() => {
    if (isUndefined(name)) {
      return
    }

    if (!contextValue[name]) {
      setContextValue({
        ...contextValue,
        [name]: defaultValue,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, defaultValue])

  function onValueChange(value) {
    if (isUndefined(name)) {
      return
    }

    setContextValue({
      ...contextValue,
      [name]: value,
    })
  }

  const currentValue = isUndefined(name) ? undefined : contextValue[name]

  return [value || currentValue, onValueChange]
}
