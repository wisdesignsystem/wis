import Dropdown from 'remote:self/Dropdown'
import { StarIcon, SaveIcon } from '@wisdesign/lsicon'

import styles from './Dropdown.module.less'

function Avatar() {
  return <div className={styles.avatar}></div>
}

function Example() {
  function handleClick() {
    console.info('click')
  }

  function handleSelect(value) {
    console.info(`select value: ${value}`)
  }

  function handleChange(value) {
    console.info(`checked value: ${value}`)
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Dropdown icon={<StarIcon />} text="Dropdown Menu" description="dropdown menu description">
          <Dropdown.Group label="Group" onSelect={handleSelect}>
            <Dropdown.Item
              icon={<SaveIcon />}
              value="a"
              label="Update"
              onClick={handleClick}
              shortcutKey="Control+I"
            ></Dropdown.Item>
            <Dropdown.Item icon={<SaveIcon />} value="b" label="Long item name is xxxxxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Item icon={<SaveIcon />} tip="xxx" value="c" label="Save" shortcutKey="Control+S"></Dropdown.Item>
          <Dropdown.CheckboxGroup label="Checkbox Group">
            <Dropdown.Item icon={<SaveIcon />} value="d" label="Update"></Dropdown.Item>
            <Dropdown.Item icon={<SaveIcon />} value="e" label="Long item name is xxxxxx"></Dropdown.Item>
          </Dropdown.CheckboxGroup>
          <Dropdown.RadioGroup label="Radio Group" onChange={handleChange}>
            <Dropdown.Item icon={<SaveIcon />} value="f" label="Update"></Dropdown.Item>
            <Dropdown.Item
              icon={<SaveIcon />}
              value="g"
              label="Long item name is xxxxxx"
              shortcutKey="Control+T"
            ></Dropdown.Item>
          </Dropdown.RadioGroup>
          <Dropdown.Item label="Sub">
            <Dropdown.Group label="Group">
              <Dropdown.Item icon={<SaveIcon />} value="h" label="Update"></Dropdown.Item>
              <Dropdown.Item icon={<SaveIcon />} value="i" label="Long item name is xxxxxx"></Dropdown.Item>
            </Dropdown.Group>
            <Dropdown.Item icon={<SaveIcon />} tip="xxx" value="j" label="Save" shortcutKey="Control+H"></Dropdown.Item>
            <Dropdown.CheckboxGroup label="Checkbox Group">
              <Dropdown.Item icon={<SaveIcon />} value="k" label="Update"></Dropdown.Item>
              <Dropdown.Item icon={<SaveIcon />} value="h" label="Long item name is xxxxxx"></Dropdown.Item>
            </Dropdown.CheckboxGroup>
            <Dropdown.RadioGroup label="Radio Group">
              <Dropdown.Item icon={<SaveIcon />} value="m" label="Update"></Dropdown.Item>
              <Dropdown.Item icon={<SaveIcon />} value="n" label="Long item name is xxxxxx"></Dropdown.Item>
            </Dropdown.RadioGroup>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown icon={<StarIcon />} text="Dropdown Menu" disabled></Dropdown>
        <Dropdown
          avatar={<Avatar />}
          icon={<StarIcon />}
          variant="avatar"
          text="Dropdown Menu"
          description="dropdown menu description"
        ></Dropdown>
        <Dropdown avatar={<Avatar />} icon={<StarIcon />} variant="avatar" text="Dropdown Menu"></Dropdown>
        <Dropdown
          avatar={<Avatar />}
          icon={<StarIcon />}
          variant="menu"
          text="Dropdown Menu"
          description="dropdown menu description"
        ></Dropdown>
      </div>
    </div>
  )
}

export default Example
