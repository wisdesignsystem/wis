import { Button } from 'remote:self/button'
import { Tooltip } from 'remote:self/tooltip'

import styles from './Tooltip.module.scss'

function Example() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Tooltip text="Tooltip" side="top" open align="start">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="left" open align="start">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="right" open align="start">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="bottom" open align="start">
          <Button text="Button"></Button>
        </Tooltip>
      </div>
      <div className={styles.col}>
        <Tooltip text="Tooltip" side="top" open align="center">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="left" open align="center">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="right" open align="center">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="bottom" open align="center">
          <Button text="Button"></Button>
        </Tooltip>
      </div>
      <div className={styles.col}>
        <Tooltip text="Tooltip" side="top" open align="end">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="left" open align="end">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="right" open align="end">
          <Button text="Button"></Button>
        </Tooltip>
        <Tooltip text="Tooltip" side="bottom" open align="end">
          <Button text="Button"></Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default Example
