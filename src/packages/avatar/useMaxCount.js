import { useRef, useState, useEffect } from 'react'
import useObserverResize from '@/hooks/useObserverResize'

export default function useMaxCount() {
  const [max, setMax] = useState(-1)
  const ref = useRef(null)

  const rect = useObserverResize(ref)

  useEffect(() => {
    if (!rect) {
      return
    }

    if (ref.current.childNodes.length < 2) {
      setMax(0)
      return
    }

    const groupRect = ref.current.getBoundingClientRect()

    const itemOne = ref.current.childNodes[0]
    const itemTwo = ref.current.childNodes[1]

    const itemOneRect = itemOne.getBoundingClientRect()
    const itemTwoRect = itemTwo.getBoundingClientRect()

    const gap = itemOneRect.right - itemTwoRect.left

    const count = Math.floor((groupRect.width - gap) / (itemOneRect.width - gap))

    setMax(count)
  }, [rect])

  return { ref, max }
}
