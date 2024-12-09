import { ToggleGroup, ToggleItem } from "remote:self/toggle";
import { StarIcon } from "@wisdesign/lsicon";

import styles from "./ToggleGroup.module.scss";

function Example() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <ToggleGroup>
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>
      <div className={styles.col}>
        <ToggleGroup>
          <ToggleItem disabled value="a" text="Toggle Button A" />
          <ToggleItem
            disabled
            value="b"
            text="Toggle Button B"
            icon={<StarIcon />}
          />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>

      <div className={styles.col}>
        <ToggleGroup variant="compact" multiple>
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>
      <div className={styles.col}>
        <ToggleGroup disabled variant="compact">
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>

      <div className={styles.col}>
        <ToggleGroup size="sm">
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>
      <div className={styles.col}>
        <ToggleGroup disabled size="sm">
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>

      <div className={styles.col}>
        <ToggleGroup variant="compact" size="sm">
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>
      <div className={styles.col}>
        <ToggleGroup disabled variant="compact" size="sm">
          <ToggleItem value="a" text="Toggle Button A" />
          <ToggleItem value="b" text="Toggle Button B" icon={<StarIcon />} />
          <ToggleItem
            value="c"
            text="Toggle Button C"
            icon={<StarIcon />}
            iconControl="suffix"
          />
          <ToggleItem value="d" icon={<StarIcon />} />
        </ToggleGroup>
      </div>
    </div>
  );
}

export default Example;
