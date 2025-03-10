import { Avatar } from "wis/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownCheckboxGroup,
  DropdownGroup,
  DropdownItem,
  DropdownRadioGroup,
} from "wis/dropdown";
import {
  CameraIcon,
  ComputerIcon,
  CopyOneIcon,
  DeleteIcon,
  EditIcon,
  FolderIcon,
  MobileIcon,
  MusicIcon,
  PadIcon,
  ShareIcon,
  StarIcon,
} from "@wisdesign/lsicon";

import styles from "./Dropdown.module.scss";

function Example() {
  function renderDropdownButton() {
    return (
      <>
        <DropdownGroup title="Device">
          <DropdownItem
            label="Desktop"
            value="desktop"
            icon={<ComputerIcon />}
          />
          <DropdownItem label="Tablet" value="tablet" icon={<PadIcon />} />
          <DropdownItem label="Mobile" value="mobile" icon={<MobileIcon />} />
        </DropdownGroup>
      </>
    );
  }

  function renderSingleDropdown(key: string) {
    return (
      <>
        <DropdownGroup title="Basics">
          <DropdownItem
            label="Edit"
            value="edit"
            icon={<EditIcon />}
            shortcutKey={`Meta+${key}`}
          />
          <DropdownItem
            label="Preview"
            value="preview"
            icon={<ComputerIcon />}
            shortcutKey={`Shift+${key}`}
          />
          <DropdownItem
            label="Share"
            value="share"
            icon={<ShareIcon />}
            shortcutKey={`Control+${key}`}
          />
        </DropdownGroup>
        <DropdownGroup title="Files">
          <DropdownItem
            label="Duplicate"
            value="duplicate"
            icon={<CopyOneIcon />}
          />
          <DropdownItem label="Move To" value="move" icon={<FolderIcon />}>
            <DropdownItem label="Music" value="music" icon={<MusicIcon />} />
            <DropdownItem label="Camera" value="camera" icon={<CameraIcon />} />
          </DropdownItem>
        </DropdownGroup>
        <DropdownItem
          label="Disabled"
          value="disabled"
          disabled
          icon={<DeleteIcon />}
        />
        <DropdownItem
          label="Delete"
          value="delete"
          status="danger"
          icon={<DeleteIcon />}
        />
      </>
    );
  }

  function renderComplexDropdown(key: string) {
    return (
      <>
        <DropdownRadioGroup name="radioGroup" title="Radio Group">
          <DropdownItem
            label="Edit"
            value="edit"
            icon={<EditIcon />}
            shortcutKey={`Meta+${key}`}
          />
          <DropdownItem
            label="Preview"
            value="preview"
            icon={<ComputerIcon />}
            shortcutKey={`Shift+${key}`}
          />
          <DropdownItem
            label="Share"
            value="share"
            icon={<ShareIcon />}
            shortcutKey={`Control+${key}`}
          />
        </DropdownRadioGroup>
        <DropdownCheckboxGroup
          name="checkboxGroup"
          title="Checkbox Group"
          defaultValue={["duplicate3"]}
        >
          <DropdownItem
            label="Duplicate"
            value="duplicate"
            icon={<CopyOneIcon />}
          />
          <DropdownItem
            label="Duplicate2"
            value="duplicate2"
            icon={<CopyOneIcon />}
          />
          <DropdownItem
            label="Duplicate3"
            disabled
            value="duplicate3"
            icon={<CopyOneIcon />}
          />
          <DropdownItem
            label="Duplicate4"
            disabled
            value="duplicate4"
            icon={<CopyOneIcon />}
          />
        </DropdownCheckboxGroup>
        <DropdownItem
          label="Disabled"
          value="disabled"
          disabled
          icon={<DeleteIcon />}
        />
        <DropdownItem
          label="Delete"
          value="delete"
          status="danger"
          icon={<DeleteIcon />}
        />
      </>
    );
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
        <Dropdown text="Dropdown">{renderSingleDropdown("E")}</Dropdown>
        <Dropdown text="Dropdown" description="Dropdown description message">
          {renderSingleDropdown("Y")}
        </Dropdown>
        <Dropdown icon={<StarIcon />} text="Dropdown">
          {renderComplexDropdown("L")}
        </Dropdown>
        <Dropdown
          icon={<StarIcon />}
          text="Dropdown"
          description="Dropdown description message"
          arrowDirection="right"
        >
          {renderSingleDropdown("U")}
        </Dropdown>
        <Dropdown avatar={<Avatar name="Wis Design" />} text="Dropdown">
          {renderComplexDropdown("O")}
        </Dropdown>
        <Dropdown
          avatar={<Avatar name="Wis Design" />}
          text="Dropdown"
          description="Dropdown description message"
          arrowDirection="right"
        >
          {renderSingleDropdown("P")}
        </Dropdown>
        <Dropdown icon={<StarIcon />}>{renderComplexDropdown("J")}</Dropdown>
        <Dropdown avatar={<Avatar name="Wis Design" />}>
          {renderSingleDropdown("T")}
        </Dropdown>
      </div>
    </div>
  );
}

export default Example;
