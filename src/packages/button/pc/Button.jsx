import styles from './Button.module.less'

function Button() {
  return (
    <button className={styles.button} onClick={() => window.alert('pc button click')}>
      PC Button
    </button>
  )
}

export default Button
