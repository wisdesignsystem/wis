import Dropdown from 'remote:self/Dropdown'
import {
  UserIcon,
  StarIcon,
  ComputerIcon,
  PadIcon,
  MobileIcon,
  EditIcon,
  ShareIcon,
  CopyOneIcon,
  FolderIcon,
  MusicIcon,
  CameraIcon,
  DeleteIcon,
} from '@wisdesign/lsicon'

import styles from './Dropdown.module.scss'

function Avatar() {
  return (
    <div className={styles.avatar}>
      <UserIcon />
    </div>
  )
}
Avatar.displayName = 'Avatar'

function Example() {
  function renderDropdownButton() {
    return (
      <>
        <Dropdown.Group label="Device">
          <Dropdown.Item label="Desktop" value="desktop" icon={<ComputerIcon />}></Dropdown.Item>
          <Dropdown.Item label="Tablet" value="tablet" icon={<PadIcon />}></Dropdown.Item>
          <Dropdown.Item label="Mobile" value="mobile" icon={<MobileIcon />}></Dropdown.Item>
        </Dropdown.Group>
      </>
    )
  }

  function renderSingleDropdown(key) {
    return (
      <>
        <Dropdown.Group label="Basics">
          <Dropdown.Item label="Edit" value="edit" icon={<EditIcon />} shortcutKey={`Meta+${key}`}></Dropdown.Item>
          <Dropdown.Item
            label="Preview"
            value="preview"
            icon={<ComputerIcon />}
            shortcutKey={`Shift+${key}`}
          ></Dropdown.Item>
          <Dropdown.Item
            label="Share"
            value="share"
            icon={<ShareIcon />}
            shortcutKey={`Control+${key}`}
          ></Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Group label="Files">
          <Dropdown.Item label="Duplicate" value="duplicate" icon={<CopyOneIcon />}></Dropdown.Item>
          <Dropdown.Item label="Move To" value="move" icon={<FolderIcon />}>
            <Dropdown.Item label="Music" value="music" icon={<MusicIcon />}></Dropdown.Item>
            <Dropdown.Item label="Camera" value="camera" icon={<CameraIcon />}></Dropdown.Item>
          </Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Item label="Disabled" value="disabled" disabled icon={<DeleteIcon />}></Dropdown.Item>
        <Dropdown.Item label="Delete" value="delete" status="danger" icon={<DeleteIcon />}></Dropdown.Item>
      </>
    )
  }

  function renderComplexDropdown(key) {
    return (
      <>
        <Dropdown.RadioGroup name="radioGroup" label="Radio Group">
          <Dropdown.Item label="Edit" value="edit" icon={<EditIcon />} shortcutKey={`Meta+${key}`}></Dropdown.Item>
          <Dropdown.Item
            label="Preview"
            value="preview"
            icon={<ComputerIcon />}
            shortcutKey={`Shift+${key}`}
          ></Dropdown.Item>
          <Dropdown.Item
            label="Share"
            value="share"
            icon={<ShareIcon />}
            shortcutKey={`Control+${key}`}
          ></Dropdown.Item>
        </Dropdown.RadioGroup>
        <Dropdown.CheckboxGroup name="checkboxGroup" label="Checkbox Group" defaultValue={['duplicate3']}>
          <Dropdown.Item label="Duplicate" value="duplicate" icon={<CopyOneIcon />}></Dropdown.Item>
          <Dropdown.Item label="Duplicate2" value="duplicate2" icon={<CopyOneIcon />}></Dropdown.Item>
          <Dropdown.Item label="Duplicate3" disabled value="duplicate3" icon={<CopyOneIcon />}></Dropdown.Item>
          <Dropdown.Item label="Duplicate4" disabled value="duplicate4" icon={<CopyOneIcon />}></Dropdown.Item>
        </Dropdown.CheckboxGroup>
        <Dropdown.Item label="Disabled" value="disabled" disabled icon={<DeleteIcon />}></Dropdown.Item>
        <Dropdown.Item label="Delete" value="delete" status="danger" icon={<DeleteIcon />}></Dropdown.Item>
      </>
    )
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button">{renderDropdownButton()}</Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" disabled>
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" disabled>
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" disabled>
          {renderDropdownButton()}
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" size="sm">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" size="sm">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" size="sm">
          {renderDropdownButton()}
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" disabled size="sm">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" disabled size="sm">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" disabled size="sm">
          {renderDropdownButton()}
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" size="xs">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" size="xs">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" size="xs">
          {renderDropdownButton()}
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown.Button text="Button" variant="primary" disabled size="xs">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" variant="classic" disabled size="xs">
          {renderDropdownButton()}
        </Dropdown.Button>
        <Dropdown.Button text="Button" disabled size="xs">
          {renderDropdownButton()}
        </Dropdown.Button>
      </div>

      <div className={styles.col}>
        <Dropdown text="Dropdown">{renderSingleDropdown('E')}</Dropdown>
        <Dropdown text="Dropdown" description="Dropdown description message">
          {renderSingleDropdown('Y')}
        </Dropdown>
        <Dropdown icon={<StarIcon />} text="Dropdown">
          {renderComplexDropdown('L')}
        </Dropdown>
        <Dropdown icon={<StarIcon />} text="Dropdown" description="Dropdown description message" arrowDirection="right">
          {renderSingleDropdown('U')}
        </Dropdown>
        <Dropdown avatar={<Avatar />} text="Dropdown">
          {renderComplexDropdown('O')}
        </Dropdown>
        <Dropdown avatar={<Avatar />} text="Dropdown" description="Dropdown description message" arrowDirection="right">
          {renderSingleDropdown('P')}
        </Dropdown>
        <Dropdown icon={<StarIcon />}>{renderComplexDropdown('J')}</Dropdown>
        <Dropdown avatar={<Avatar />}>{renderSingleDropdown('T')}</Dropdown>
      </div>
    </div>
  )
}

export default Example
