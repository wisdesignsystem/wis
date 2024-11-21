import {
  Dropdown,
  DropdownButton,
  DropdownGroup,
  DropdownItem,
  DropdownCheckboxGroup,
  DropdownRadioGroup,
} from 'remote:self/dropdown'
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
        <DropdownGroup label="Device">
          <DropdownItem label="Desktop" value="desktop" icon={<ComputerIcon />}></DropdownItem>
          <DropdownItem label="Tablet" value="tablet" icon={<PadIcon />}></DropdownItem>
          <DropdownItem label="Mobile" value="mobile" icon={<MobileIcon />}></DropdownItem>
        </DropdownGroup>
      </>
    )
  }

  function renderSingleDropdown(key) {
    return (
      <>
        <DropdownGroup label="Basics">
          <DropdownItem label="Edit" value="edit" icon={<EditIcon />} shortcutKey={`Meta+${key}`}></DropdownItem>
          <DropdownItem
            label="Preview"
            value="preview"
            icon={<ComputerIcon />}
            shortcutKey={`Shift+${key}`}
          ></DropdownItem>
          <DropdownItem label="Share" value="share" icon={<ShareIcon />} shortcutKey={`Control+${key}`}></DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="Files">
          <DropdownItem label="Duplicate" value="duplicate" icon={<CopyOneIcon />}></DropdownItem>
          <DropdownItem label="Move To" value="move" icon={<FolderIcon />}>
            <DropdownItem label="Music" value="music" icon={<MusicIcon />}></DropdownItem>
            <DropdownItem label="Camera" value="camera" icon={<CameraIcon />}></DropdownItem>
          </DropdownItem>
        </DropdownGroup>
        <DropdownItem label="Disabled" value="disabled" disabled icon={<DeleteIcon />}></DropdownItem>
        <DropdownItem label="Delete" value="delete" status="danger" icon={<DeleteIcon />}></DropdownItem>
      </>
    )
  }

  function renderComplexDropdown(key) {
    return (
      <>
        <DropdownRadioGroup name="radioGroup" label="Radio Group">
          <DropdownItem label="Edit" value="edit" icon={<EditIcon />} shortcutKey={`Meta+${key}`}></DropdownItem>
          <DropdownItem
            label="Preview"
            value="preview"
            icon={<ComputerIcon />}
            shortcutKey={`Shift+${key}`}
          ></DropdownItem>
          <DropdownItem label="Share" value="share" icon={<ShareIcon />} shortcutKey={`Control+${key}`}></DropdownItem>
        </DropdownRadioGroup>
        <DropdownCheckboxGroup name="checkboxGroup" label="Checkbox Group" defaultValue={['duplicate3']}>
          <DropdownItem label="Duplicate" value="duplicate" icon={<CopyOneIcon />}></DropdownItem>
          <DropdownItem label="Duplicate2" value="duplicate2" icon={<CopyOneIcon />}></DropdownItem>
          <DropdownItem label="Duplicate3" disabled value="duplicate3" icon={<CopyOneIcon />}></DropdownItem>
          <DropdownItem label="Duplicate4" disabled value="duplicate4" icon={<CopyOneIcon />}></DropdownItem>
        </DropdownCheckboxGroup>
        <DropdownItem label="Disabled" value="disabled" disabled icon={<DeleteIcon />}></DropdownItem>
        <DropdownItem label="Delete" value="delete" status="danger" icon={<DeleteIcon />}></DropdownItem>
      </>
    )
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <DropdownButton text="Button" variant="primary">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" variant="classic">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button">{renderDropdownButton()}</DropdownButton>
      </div>

      <div className={styles.col}>
        <DropdownButton text="Button" variant="primary" disabled>
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" variant="classic" disabled>
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" disabled>
          {renderDropdownButton()}
        </DropdownButton>
      </div>

      <div className={styles.col}>
        <DropdownButton text="Button" variant="primary" size="sm">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" variant="classic" size="sm">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" size="sm">
          {renderDropdownButton()}
        </DropdownButton>
      </div>

      <div className={styles.col}>
        <DropdownButton text="Button" variant="primary" disabled size="sm">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" variant="classic" disabled size="sm">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" disabled size="sm">
          {renderDropdownButton()}
        </DropdownButton>
      </div>

      <div className={styles.col}>
        <DropdownButton text="Button" variant="primary" size="xs">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" variant="classic" size="xs">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" size="xs">
          {renderDropdownButton()}
        </DropdownButton>
      </div>

      <div className={styles.col}>
        <DropdownButton text="Button" variant="primary" disabled size="xs">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" variant="classic" disabled size="xs">
          {renderDropdownButton()}
        </DropdownButton>
        <DropdownButton text="Button" disabled size="xs">
          {renderDropdownButton()}
        </DropdownButton>
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
