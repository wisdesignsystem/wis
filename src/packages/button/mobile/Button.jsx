import styles from './Button.module.less'

function Button() {
  return (
    <button
      className={styles.button}
      onClick={() => {
        window.alert('mobile button click')
      }}
    >
      Mobile Button
    </button>
  )
}

export default Button
