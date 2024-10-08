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
        <Dropdown.Button text="Button" variant="primary">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+R"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+T"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+Y"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" disabled>
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+R"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" disabled>
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+T"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" disabled>
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+Y"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" size="sm">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+R"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" size="sm">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+T"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" size="sm">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+Y"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" disabled size="sm">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+R"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" disabled size="sm">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+T"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" disabled size="sm">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+Y"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" size="xs">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+R"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" size="xs">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+T"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" size="xs">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+Y"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" disabled size="xs">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+R"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" disabled size="xs">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+T"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
        <Dropdown.Button text="Button" disabled size="xs">
          <Dropdown.Item value="value1" label="Item"></Dropdown.Item>
          <Dropdown.Item value="value1" label="Disabled Item" disabled></Dropdown.Item>
          <Dropdown.Group label="Group Title">
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />}></Dropdown.Item>
            <Dropdown.Item value="value2" label="Item" icon={<SaveIcon />} tip="xxx"></Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item
              value="value2"
              label="Item"
              icon={<SaveIcon />}
              tip="xxx"
              shortcutKey="Alt+Y"
            ></Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Button>
      </div>

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
