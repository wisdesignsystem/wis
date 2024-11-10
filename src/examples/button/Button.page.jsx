import Button from 'remote:self/Button'

import styles from './Button.module.scss'

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
    >
      <g id="theme=outline">
        <path
          id="Vector"
          stroke="currentColor"
          d="M2 12.5H14M9.6 12.9C9.6 13.7837 8.88365 14.5 8 14.5C7.11634 14.5 6.4 13.7837 6.4 12.9M8 1V3M12.5 12.5H3.5C3.5 12.5 3.5 10.6716 3.5 9.5C3.5 8.74313 3.5 7.86876 3.5 6.99999C3.5 4.51471 5.51472 2.5 8 2.5C10.4853 2.5 12.5 4.51472 12.5 7V12.5Z"
        ></path>
      </g>
    </svg>
  )
}

function Example() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Button text="Button" variant="primary" />
        <Button text="Button" variant="primary" icon={<Icon />} />
        <Button text="Button" variant="primary" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="primary" />
        <Button text="Button" variant="primary" status="danger" />
        <Button text="Button" variant="primary" status="danger" icon={<Icon />} />
        <Button text="Button" variant="primary" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="primary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="primary" disabled />
        <Button text="Button" variant="primary" disabled icon={<Icon />} />
        <Button text="Button" variant="primary" disabled icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="primary" disabled />
        <Button text="Button" variant="primary" disabled status="danger" />
        <Button text="Button" variant="primary" disabled status="danger" icon={<Icon />} />
        <Button text="Button" variant="primary" disabled status="danger" icon={<Icon />} />
        <Button icon={<Icon />} variant="primary" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button text="Button" variant="classic" />
        <Button text="Button" variant="classic" icon={<Icon />} />
        <Button text="Button" variant="classic" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="classic" />
        <Button text="Button" variant="classic" status="danger" />
        <Button text="Button" variant="classic" status="danger" icon={<Icon />} />
        <Button text="Button" variant="classic" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="classic" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="classic" disabled />
        <Button text="Button" variant="classic" disabled icon={<Icon />} />
        <Button text="Button" variant="classic" disabled icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="classic" disabled />
        <Button text="Button" variant="classic" disabled status="danger" />
        <Button text="Button" variant="classic" disabled status="danger" icon={<Icon />} />
        <Button text="Button" variant="classic" disabled status="danger" icon={<Icon />} />
        <Button icon={<Icon />} variant="classic" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button text="Button" />
        <Button text="Button" icon={<Icon />} />
        <Button text="Button" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} />
        <Button text="Button" status="danger" />
        <Button text="Button" status="danger" icon={<Icon />} />
        <Button text="Button" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" disabled />
        <Button text="Button" disabled icon={<Icon />} />
        <Button text="Button" disabled icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} disabled />
        <Button text="Button" disabled status="danger" />
        <Button text="Button" disabled status="danger" icon={<Icon />} />
        <Button text="Button" disabled status="danger" icon={<Icon />} />
        <Button icon={<Icon />} disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button text="Button" variant="tertiary" shortcutKey="Shift+F" />
        <Button text="Button" variant="tertiary" icon={<Icon />} />
        <Button text="Button" variant="tertiary" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="tertiary" />
        <Button text="Button" variant="tertiary" status="danger" />
        <Button text="Button" variant="tertiary" status="danger" icon={<Icon />} />
        <Button text="Button" variant="tertiary" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="tertiary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="tertiary" disabled />
        <Button text="Button" variant="tertiary" disabled icon={<Icon />} />
        <Button text="Button" variant="tertiary" disabled icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="tertiary" disabled />
        <Button text="Button" variant="tertiary" disabled status="danger" />
        <Button text="Button" variant="tertiary" disabled status="danger" icon={<Icon />} />
        <Button text="Button" variant="tertiary" disabled status="danger" icon={<Icon />} />
        <Button icon={<Icon />} variant="tertiary" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button text="Button" variant="ghost" />
        <Button text="Button" variant="ghost" icon={<Icon />} />
        <Button text="Button" variant="ghost" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="ghost" />
        <Button text="Button" variant="ghost" status="danger" />
        <Button text="Button" variant="ghost" status="danger" icon={<Icon />} />
        <Button text="Button" variant="ghost" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="ghost" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="ghost" disabled />
        <Button text="Button" variant="ghost" disabled icon={<Icon />} />
        <Button text="Button" variant="ghost" disabled icon={<Icon />} iconControl="suffix" />
        <Button icon={<Icon />} variant="ghost" disabled />
        <Button text="Button" variant="ghost" disabled status="danger" />
        <Button text="Button" variant="ghost" disabled status="danger" icon={<Icon />} />
        <Button text="Button" variant="ghost" disabled status="danger" icon={<Icon />} />
        <Button icon={<Icon />} variant="ghost" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="primary" />
        <Button size="sm" text="Button" variant="primary" icon={<Icon />} />
        <Button size="sm" text="Button" variant="primary" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="primary" />
        <Button size="sm" text="Button" variant="primary" status="danger" />
        <Button size="sm" text="Button" variant="primary" status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="primary" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="primary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="primary" disabled />
        <Button size="sm" text="Button" variant="primary" disabled icon={<Icon />} />
        <Button size="sm" text="Button" variant="primary" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="primary" disabled />
        <Button size="sm" text="Button" variant="primary" disabled status="danger" />
        <Button size="sm" text="Button" variant="primary" disabled status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="primary" disabled status="danger" icon={<Icon />} />
        <Button size="sm" icon={<Icon />} variant="primary" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="classic" />
        <Button size="sm" text="Button" variant="classic" icon={<Icon />} />
        <Button size="sm" text="Button" variant="classic" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="classic" />
        <Button size="sm" text="Button" variant="classic" status="danger" />
        <Button size="sm" text="Button" variant="classic" status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="classic" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="classic" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="classic" disabled />
        <Button size="sm" text="Button" variant="classic" disabled icon={<Icon />} />
        <Button size="sm" text="Button" variant="classic" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="classic" disabled />
        <Button size="sm" text="Button" variant="classic" disabled status="danger" />
        <Button size="sm" text="Button" variant="classic" disabled status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="classic" disabled status="danger" icon={<Icon />} />
        <Button size="sm" icon={<Icon />} variant="classic" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" />
        <Button size="sm" text="Button" icon={<Icon />} />
        <Button size="sm" text="Button" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} />
        <Button size="sm" text="Button" status="danger" />
        <Button size="sm" text="Button" status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" disabled />
        <Button size="sm" text="Button" disabled icon={<Icon />} />
        <Button size="sm" text="Button" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} disabled />
        <Button size="sm" text="Button" disabled status="danger" />
        <Button size="sm" text="Button" disabled status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" disabled status="danger" icon={<Icon />} />
        <Button size="sm" icon={<Icon />} disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="tertiary" />
        <Button size="sm" text="Button" variant="tertiary" icon={<Icon />} />
        <Button size="sm" text="Button" variant="tertiary" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="tertiary" />
        <Button size="sm" text="Button" variant="tertiary" status="danger" />
        <Button size="sm" text="Button" variant="tertiary" status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="tertiary" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="tertiary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="tertiary" disabled />
        <Button size="sm" text="Button" variant="tertiary" disabled icon={<Icon />} />
        <Button size="sm" text="Button" variant="tertiary" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="tertiary" disabled />
        <Button size="sm" text="Button" variant="tertiary" disabled status="danger" />
        <Button size="sm" text="Button" variant="tertiary" disabled status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="tertiary" disabled status="danger" icon={<Icon />} />
        <Button size="sm" icon={<Icon />} variant="tertiary" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="ghost" />
        <Button size="sm" text="Button" variant="ghost" icon={<Icon />} />
        <Button size="sm" text="Button" variant="ghost" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="ghost" />
        <Button size="sm" text="Button" variant="ghost" status="danger" />
        <Button size="sm" text="Button" variant="ghost" status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="ghost" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="ghost" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="ghost" disabled />
        <Button size="sm" text="Button" variant="ghost" disabled icon={<Icon />} />
        <Button size="sm" text="Button" variant="ghost" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="sm" icon={<Icon />} variant="ghost" disabled />
        <Button size="sm" text="Button" variant="ghost" disabled status="danger" />
        <Button size="sm" text="Button" variant="ghost" disabled status="danger" icon={<Icon />} />
        <Button size="sm" text="Button" variant="ghost" disabled status="danger" icon={<Icon />} />
        <Button size="sm" icon={<Icon />} variant="ghost" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="primary" />
        <Button size="xs" text="Button" variant="primary" icon={<Icon />} />
        <Button size="xs" text="Button" variant="primary" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="primary" />
        <Button size="xs" text="Button" variant="primary" status="danger" />
        <Button size="xs" text="Button" variant="primary" status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="primary" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="primary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="primary" disabled />
        <Button size="xs" text="Button" variant="primary" disabled icon={<Icon />} />
        <Button size="xs" text="Button" variant="primary" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="primary" disabled />
        <Button size="xs" text="Button" variant="primary" disabled status="danger" />
        <Button size="xs" text="Button" variant="primary" disabled status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="primary" disabled status="danger" icon={<Icon />} />
        <Button size="xs" icon={<Icon />} variant="primary" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="classic" />
        <Button size="xs" text="Button" variant="classic" icon={<Icon />} />
        <Button size="xs" text="Button" variant="classic" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="classic" />
        <Button size="xs" text="Button" variant="classic" status="danger" />
        <Button size="xs" text="Button" variant="classic" status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="classic" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="classic" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="classic" disabled />
        <Button size="xs" text="Button" variant="classic" disabled icon={<Icon />} />
        <Button size="xs" text="Button" variant="classic" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="classic" disabled />
        <Button size="xs" text="Button" variant="classic" disabled status="danger" />
        <Button size="xs" text="Button" variant="classic" disabled status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="classic" disabled status="danger" icon={<Icon />} />
        <Button size="xs" icon={<Icon />} variant="classic" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" />
        <Button size="xs" text="Button" icon={<Icon />} />
        <Button size="xs" text="Button" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} />
        <Button size="xs" text="Button" status="danger" />
        <Button size="xs" text="Button" status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" disabled />
        <Button size="xs" text="Button" disabled icon={<Icon />} />
        <Button size="xs" text="Button" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} disabled />
        <Button size="xs" text="Button" disabled status="danger" />
        <Button size="xs" text="Button" disabled status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" disabled status="danger" icon={<Icon />} />
        <Button size="xs" icon={<Icon />} disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="tertiary" />
        <Button size="xs" text="Button" variant="tertiary" icon={<Icon />} />
        <Button size="xs" text="Button" variant="tertiary" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="tertiary" />
        <Button size="xs" text="Button" variant="tertiary" status="danger" />
        <Button size="xs" text="Button" variant="tertiary" status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="tertiary" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="tertiary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="tertiary" disabled />
        <Button size="xs" text="Button" variant="tertiary" disabled icon={<Icon />} />
        <Button size="xs" text="Button" variant="tertiary" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="tertiary" disabled />
        <Button size="xs" text="Button" variant="tertiary" disabled status="danger" />
        <Button size="xs" text="Button" variant="tertiary" disabled status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="tertiary" disabled status="danger" icon={<Icon />} />
        <Button size="xs" icon={<Icon />} variant="tertiary" disabled status="danger" shortcutKey="Shift+K" />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="ghost" />
        <Button size="xs" text="Button" variant="ghost" icon={<Icon />} />
        <Button size="xs" text="Button" variant="ghost" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="ghost" />
        <Button size="xs" text="Button" variant="ghost" status="danger" />
        <Button size="xs" text="Button" variant="ghost" status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="ghost" status="danger" icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="ghost" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="ghost" disabled />
        <Button size="xs" text="Button" variant="ghost" disabled icon={<Icon />} />
        <Button size="xs" text="Button" variant="ghost" disabled icon={<Icon />} iconControl="suffix" />
        <Button size="xs" icon={<Icon />} variant="ghost" disabled />
        <Button size="xs" text="Button" variant="ghost" disabled status="danger" />
        <Button size="xs" text="Button" variant="ghost" disabled status="danger" icon={<Icon />} />
        <Button size="xs" text="Button" variant="ghost" disabled status="danger" icon={<Icon />} />
        <Button size="xs" icon={<Icon />} variant="ghost" disabled status="danger" />
      </div>
    </div>
  )
}

export default Example
