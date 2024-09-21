import Button from 'remote:self/Button'
import { useState } from 'react'

import styles from './Button.module.less'

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
  const [shortcut, setShortcut] = useState('ctrl+h')

  return (
    <div className={styles.buttons}>
      <Button
        variant="primary"
        text="Button"
        icon={<Icon />}
        shortcutKey={shortcut}
        onClick={() => {
          console.info('Button clicked')
          setShortcut('ctrl+shift+h')
        }}
      />
      <Button variant="primary" icon={<Icon />} />
      <Button variant="primary" size="sm" text="Button" icon={<Icon />} />
      <Button variant="primary" size="xs" text="Button" icon={<Icon />} iconControl="suffix" />
      <Button variant="primary" disabled size="xs" text="Button" icon={<Icon />} iconControl="suffix" />
      <Button
        variant="primary"
        status="danger"
        shortcutKey="meta+y"
        disabled
        size="xs"
        text="Button"
        icon={<Icon />}
        iconControl="suffix"
      />

      <Button text="Button" icon={<Icon />} iconControl="suffix" />
      <Button size="sm" icon={<Icon />} shortcutKey="ctrl+/" />
      <Button size="sm" shortcutKey="shift+y" text="Button" icon={<Icon />} />
      <Button size="sm" disabled text="Button" icon={<Icon />} />
      <Button size="xs" text="Button" icon={<Icon />} />
      <Button size="xs" status="danger" text="Button" icon={<Icon />} />

      <Button variant="classic" text="Button" icon={<Icon />} />
      <Button variant="classic" size="xs" icon={<Icon />} />
      <Button variant="classic" disabled icon={<Icon />} />
      <Button variant="classic" size="sm" text="Button" icon={<Icon />} iconControl="suffix" />
      <Button variant="classic" size="xs" text="Button" icon={<Icon />} />
      <Button variant="classic" status="danger" size="xs" text="Button" icon={<Icon />} />

      <Button variant="tertiary" text="Button" icon={<Icon />} />
      <Button variant="tertiary" disabled text="Button" icon={<Icon />} />
      <Button variant="tertiary" icon={<Icon />} />
      <Button variant="tertiary" size="sm" text="Button" icon={<Icon />} />
      <Button variant="tertiary" size="xs" text="Button" icon={<Icon />} />
      <Button variant="tertiary" status="danger" size="xs" text="Button" icon={<Icon />} />

      <Button variant="ghost" shortcutKey="shift+t" text="Button" icon={<Icon />} />
      <Button variant="ghost" shortcutKey="shift+i" disabled text="Button" icon={<Icon />} />
      <Button variant="ghost" icon={<Icon />} />
      <Button variant="ghost" size="sm" text="Button" icon={<Icon />} />
      <Button variant="ghost" size="xs" text="Button" icon={<Icon />} />
      <Button variant="ghost" status="danger" size="xs" text="Button" icon={<Icon />} />
    </div>
  )
}

export default Example
