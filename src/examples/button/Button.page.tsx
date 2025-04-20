import { Button } from "wis/button";
import { useNavigate } from "wiscore/router";
import { StarIcon } from "@wisdesign/lsicon";

import styles from "./Button.module.scss";

function Example() {
  const navigate = useNavigate();

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Button
          text="Button"
          variant="primary"
          onClick={() => navigate("/avatar")}
        />
        <Button text="Button" variant="primary" icon={<StarIcon />} />
        <Button
          text="Button"
          variant="primary"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="primary" />
        <Button text="Button" variant="primary" status="danger" />
        <Button
          text="Button"
          variant="primary"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="primary"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="primary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="primary" disabled />
        <Button text="Button" variant="primary" disabled icon={<StarIcon />} />
        <Button
          text="Button"
          variant="primary"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="primary" disabled />
        <Button text="Button" variant="primary" disabled status="danger" />
        <Button
          text="Button"
          variant="primary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="primary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          icon={<StarIcon />}
          variant="primary"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button text="Button" variant="classic" />
        <Button text="Button" variant="classic" icon={<StarIcon />} />
        <Button
          text="Button"
          variant="classic"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="classic" />
        <Button text="Button" variant="classic" status="danger" />
        <Button
          text="Button"
          variant="classic"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="classic"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="classic" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="classic" disabled />
        <Button text="Button" variant="classic" disabled icon={<StarIcon />} />
        <Button
          text="Button"
          variant="classic"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="classic" disabled />
        <Button text="Button" variant="classic" disabled status="danger" />
        <Button
          text="Button"
          variant="classic"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="classic"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          icon={<StarIcon />}
          variant="classic"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button text="Button" />
        <Button text="Button" icon={<StarIcon />} />
        <Button text="Button" icon={<StarIcon />} iconControl="suffix" />
        <Button icon={<StarIcon />} />
        <Button text="Button" status="danger" />
        <Button text="Button" status="danger" icon={<StarIcon />} />
        <Button
          text="Button"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" disabled />
        <Button text="Button" disabled icon={<StarIcon />} />
        <Button
          text="Button"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} disabled />
        <Button text="Button" disabled status="danger" />
        <Button text="Button" disabled status="danger" icon={<StarIcon />} />
        <Button text="Button" disabled status="danger" icon={<StarIcon />} />
        <Button icon={<StarIcon />} disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button text="Button" variant="tertiary" shortcutKey="Shift+F" />
        <Button text="Button" variant="tertiary" icon={<StarIcon />} />
        <Button
          text="Button"
          variant="tertiary"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="tertiary" />
        <Button text="Button" variant="tertiary" status="danger" />
        <Button
          text="Button"
          variant="tertiary"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="tertiary"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="tertiary" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="tertiary" disabled />
        <Button text="Button" variant="tertiary" disabled icon={<StarIcon />} />
        <Button
          text="Button"
          variant="tertiary"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="tertiary" disabled />
        <Button text="Button" variant="tertiary" disabled status="danger" />
        <Button
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          icon={<StarIcon />}
          variant="tertiary"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button text="Button" variant="ghost" />
        <Button text="Button" variant="ghost" icon={<StarIcon />} />
        <Button
          text="Button"
          variant="ghost"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="ghost" />
        <Button text="Button" variant="ghost" status="danger" />
        <Button
          text="Button"
          variant="ghost"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="ghost"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="ghost" status="danger" />
      </div>
      <div className={styles.col}>
        <Button text="Button" variant="ghost" disabled />
        <Button text="Button" variant="ghost" disabled icon={<StarIcon />} />
        <Button
          text="Button"
          variant="ghost"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button icon={<StarIcon />} variant="ghost" disabled />
        <Button text="Button" variant="ghost" disabled status="danger" />
        <Button
          text="Button"
          variant="ghost"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          text="Button"
          variant="ghost"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button icon={<StarIcon />} variant="ghost" disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="primary" />
        <Button size="sm" text="Button" variant="primary" icon={<StarIcon />} />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="primary" />
        <Button size="sm" text="Button" variant="primary" status="danger" />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="primary"
          status="danger"
        />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="primary" disabled />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="primary" disabled />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          disabled
          status="danger"
        />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="primary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="primary"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="classic" />
        <Button size="sm" text="Button" variant="classic" icon={<StarIcon />} />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="classic" />
        <Button size="sm" text="Button" variant="classic" status="danger" />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="classic"
          status="danger"
        />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="classic" disabled />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="classic" disabled />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          disabled
          status="danger"
        />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="classic"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="classic"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" />
        <Button size="sm" text="Button" icon={<StarIcon />} />
        <Button
          size="sm"
          text="Button"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} />
        <Button size="sm" text="Button" status="danger" />
        <Button size="sm" text="Button" status="danger" icon={<StarIcon />} />
        <Button
          size="sm"
          text="Button"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" disabled />
        <Button size="sm" text="Button" disabled icon={<StarIcon />} />
        <Button
          size="sm"
          text="Button"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} disabled />
        <Button size="sm" text="Button" disabled status="danger" />
        <Button
          size="sm"
          text="Button"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button size="sm" icon={<StarIcon />} disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="tertiary" />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="tertiary" />
        <Button size="sm" text="Button" variant="tertiary" status="danger" />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="tertiary"
          status="danger"
        />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="tertiary" disabled />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="tertiary" disabled />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
        />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="tertiary"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button size="sm" text="Button" variant="ghost" />
        <Button size="sm" text="Button" variant="ghost" icon={<StarIcon />} />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="ghost" />
        <Button size="sm" text="Button" variant="ghost" status="danger" />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="ghost" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="sm" text="Button" variant="ghost" disabled />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="sm" icon={<StarIcon />} variant="ghost" disabled />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          disabled
          status="danger"
        />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          text="Button"
          variant="ghost"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="sm"
          icon={<StarIcon />}
          variant="ghost"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="primary" />
        <Button size="xs" text="Button" variant="primary" icon={<StarIcon />} />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="primary" />
        <Button size="xs" text="Button" variant="primary" status="danger" />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="primary"
          status="danger"
        />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="primary" disabled />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="primary" disabled />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          disabled
          status="danger"
        />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="primary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="primary"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="classic" />
        <Button size="xs" text="Button" variant="classic" icon={<StarIcon />} />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="classic" />
        <Button size="xs" text="Button" variant="classic" status="danger" />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="classic"
          status="danger"
        />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="classic" disabled />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="classic" disabled />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          disabled
          status="danger"
        />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="classic"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="classic"
          disabled
          status="danger"
        />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" />
        <Button size="xs" text="Button" icon={<StarIcon />} />
        <Button
          size="xs"
          text="Button"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} />
        <Button size="xs" text="Button" status="danger" />
        <Button size="xs" text="Button" status="danger" icon={<StarIcon />} />
        <Button
          size="xs"
          text="Button"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" disabled />
        <Button size="xs" text="Button" disabled icon={<StarIcon />} />
        <Button
          size="xs"
          text="Button"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} disabled />
        <Button size="xs" text="Button" disabled status="danger" />
        <Button
          size="xs"
          text="Button"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button size="xs" icon={<StarIcon />} disabled status="danger" />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="tertiary" />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="tertiary" />
        <Button size="xs" text="Button" variant="tertiary" status="danger" />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="tertiary"
          status="danger"
        />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="tertiary" disabled />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="tertiary" disabled />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
        />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="tertiary"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="tertiary"
          disabled
          status="danger"
          shortcutKey="Shift+K"
        />
      </div>

      <div className={styles.col}>
        <Button size="xs" text="Button" variant="ghost" />
        <Button size="xs" text="Button" variant="ghost" icon={<StarIcon />} />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="ghost" />
        <Button size="xs" text="Button" variant="ghost" status="danger" />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          status="danger"
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="ghost" status="danger" />
      </div>
      <div className={styles.col}>
        <Button size="xs" text="Button" variant="ghost" disabled />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          disabled
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          disabled
          icon={<StarIcon />}
          iconControl="suffix"
        />
        <Button size="xs" icon={<StarIcon />} variant="ghost" disabled />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          disabled
          status="danger"
        />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          text="Button"
          variant="ghost"
          disabled
          status="danger"
          icon={<StarIcon />}
        />
        <Button
          size="xs"
          icon={<StarIcon />}
          variant="ghost"
          disabled
          status="danger"
        />
      </div>
    </div>
  );
}

export default Example;
