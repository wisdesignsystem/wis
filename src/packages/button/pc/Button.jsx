import { useState } from 'react'
import translate from 'remote:self/locales'

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
      {translate.t('button.text')} {count}
    </button>
  )
}

export default Button
