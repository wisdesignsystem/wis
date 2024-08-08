import { useState } from 'react'

import styles from './Button.module.less'

function Button() {
  const [count, setCount] = useState(0)

  return (
    <button
      className={styles.button}
      onClick={() => {
        window.alert('pc button click')
        setCount(count + 1)
      }}
    >
      PC Button {count}
    </button>
  )
}

export default Button
