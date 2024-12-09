import { Avatar, AvatarGroup } from "remote:self/avatar";
import { UserIcon } from "@wisdesign/lsicon";

import styles from "./Avatar.module.scss";

function Example() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          size="lg"
          onClick={() => alert("Clicked!")}
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          size="sm"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          size="xs"
        />

        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          shape="square"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          name="Wis Design"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar icon={<UserIcon />} name="Wis Design" size="lg" />
        <Avatar icon={<UserIcon />} name="Wis Design" />
        <Avatar icon={<UserIcon />} name="Wis Design" size="sm" />
        <Avatar icon={<UserIcon />} name="Wis Design" size="xs" />

        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar icon={<UserIcon />} name="Wis Design" shape="square" />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar icon={<UserIcon />} name="Wis Design" colorSchema="dark" />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar icon={<UserIcon />} name="Wis Design" colorSchema="outline" />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="gray" icon={<UserIcon />} name="Wis Design" size="lg" />
        <Avatar color="gray" icon={<UserIcon />} name="Wis Design" />
        <Avatar color="gray" icon={<UserIcon />} name="Wis Design" size="sm" />
        <Avatar color="gray" icon={<UserIcon />} name="Wis Design" size="xs" />

        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="gray"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="blue" icon={<UserIcon />} name="Wis Design" size="lg" />
        <Avatar color="blue" icon={<UserIcon />} name="Wis Design" />
        <Avatar color="blue" icon={<UserIcon />} name="Wis Design" size="sm" />
        <Avatar color="blue" icon={<UserIcon />} name="Wis Design" size="xs" />

        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="blue"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
        />
        <Avatar color="purple" icon={<UserIcon />} name="Wis Design" />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
        />

        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="purple"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
        />
        <Avatar color="orange" icon={<UserIcon />} name="Wis Design" />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
        />

        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="orange"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="red" icon={<UserIcon />} name="Wis Design" size="lg" />
        <Avatar color="red" icon={<UserIcon />} name="Wis Design" />
        <Avatar color="red" icon={<UserIcon />} name="Wis Design" size="sm" />
        <Avatar color="red" icon={<UserIcon />} name="Wis Design" size="xs" />

        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="red"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="green" icon={<UserIcon />} name="Wis Design" size="lg" />
        <Avatar color="green" icon={<UserIcon />} name="Wis Design" />
        <Avatar color="green" icon={<UserIcon />} name="Wis Design" size="sm" />
        <Avatar color="green" icon={<UserIcon />} name="Wis Design" size="xs" />

        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          size="lg"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          size="sm"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          size="xs"
          shape="square"
        />

        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
        />

        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="green"
          icon={<UserIcon />}
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>

      <div className={styles.col}>
        <Avatar name="Wis Design" size="lg" />
        <Avatar name="Wis Design" />
        <Avatar name="Wis Design" size="sm" />
        <Avatar name="Wis Design" size="xs" />

        <Avatar name="Wis Design" size="lg" shape="square" />
        <Avatar name="Wis Design" shape="square" />
        <Avatar name="Wis Design" size="sm" shape="square" />
        <Avatar name="Wis Design" size="xs" shape="square" />

        <Avatar name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar name="Wis Design" colorSchema="dark" />
        <Avatar name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar name="Wis Design" colorSchema="dark" size="lg" shape="square" />
        <Avatar name="Wis Design" colorSchema="dark" shape="square" />
        <Avatar name="Wis Design" colorSchema="dark" size="sm" shape="square" />
        <Avatar name="Wis Design" colorSchema="dark" size="xs" shape="square" />

        <Avatar name="Wis Design" colorSchema="outline" size="lg" />
        <Avatar name="Wis Design" colorSchema="outline" />
        <Avatar name="Wis Design" colorSchema="outline" size="sm" />
        <Avatar name="Wis Design" colorSchema="outline" size="xs" />

        <Avatar
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar name="Wis Design" colorSchema="outline" shape="square" />
        <Avatar
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="gray" name="Wis Design" size="lg" />
        <Avatar color="gray" name="Wis Design" />
        <Avatar color="gray" name="Wis Design" size="sm" />
        <Avatar color="gray" name="Wis Design" size="xs" />

        <Avatar color="gray" name="Wis Design" size="lg" shape="square" />
        <Avatar color="gray" name="Wis Design" shape="square" />
        <Avatar color="gray" name="Wis Design" size="sm" shape="square" />
        <Avatar color="gray" name="Wis Design" size="xs" shape="square" />

        <Avatar color="gray" name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar color="gray" name="Wis Design" colorSchema="dark" />
        <Avatar color="gray" name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar color="gray" name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar color="gray" name="Wis Design" colorSchema="outline" />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="gray"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="blue" name="Wis Design" size="lg" />
        <Avatar color="blue" name="Wis Design" />
        <Avatar color="blue" name="Wis Design" size="sm" />
        <Avatar color="blue" name="Wis Design" size="xs" />

        <Avatar color="blue" name="Wis Design" size="lg" shape="square" />
        <Avatar color="blue" name="Wis Design" shape="square" />
        <Avatar color="blue" name="Wis Design" size="sm" shape="square" />
        <Avatar color="blue" name="Wis Design" size="xs" shape="square" />

        <Avatar color="blue" name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar color="blue" name="Wis Design" colorSchema="dark" />
        <Avatar color="blue" name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar color="blue" name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar color="blue" name="Wis Design" colorSchema="outline" />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="blue"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="purple" name="Wis Design" size="lg" />
        <Avatar color="purple" name="Wis Design" />
        <Avatar color="purple" name="Wis Design" size="sm" />
        <Avatar color="purple" name="Wis Design" size="xs" />

        <Avatar color="purple" name="Wis Design" size="lg" shape="square" />
        <Avatar color="purple" name="Wis Design" shape="square" />
        <Avatar color="purple" name="Wis Design" size="sm" shape="square" />
        <Avatar color="purple" name="Wis Design" size="xs" shape="square" />

        <Avatar color="purple" name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar color="purple" name="Wis Design" colorSchema="dark" />
        <Avatar color="purple" name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar color="purple" name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar color="purple" name="Wis Design" colorSchema="outline" />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="purple"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="orange" name="Wis Design" size="lg" />
        <Avatar color="orange" name="Wis Design" />
        <Avatar color="orange" name="Wis Design" size="sm" />
        <Avatar color="orange" name="Wis Design" size="xs" />

        <Avatar color="orange" name="Wis Design" size="lg" shape="square" />
        <Avatar color="orange" name="Wis Design" shape="square" />
        <Avatar color="orange" name="Wis Design" size="sm" shape="square" />
        <Avatar color="orange" name="Wis Design" size="xs" shape="square" />

        <Avatar color="orange" name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar color="orange" name="Wis Design" colorSchema="dark" />
        <Avatar color="orange" name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar color="orange" name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar color="orange" name="Wis Design" colorSchema="outline" />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="orange"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="red" name="Wis Design" size="lg" />
        <Avatar color="red" name="Wis Design" />
        <Avatar color="red" name="Wis Design" size="sm" />
        <Avatar color="red" name="Wis Design" size="xs" />

        <Avatar color="red" name="Wis Design" size="lg" shape="square" />
        <Avatar color="red" name="Wis Design" shape="square" />
        <Avatar color="red" name="Wis Design" size="sm" shape="square" />
        <Avatar color="red" name="Wis Design" size="xs" shape="square" />

        <Avatar color="red" name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar color="red" name="Wis Design" colorSchema="dark" />
        <Avatar color="red" name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar color="red" name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar color="red" name="Wis Design" colorSchema="outline" size="lg" />
        <Avatar color="red" name="Wis Design" colorSchema="outline" />
        <Avatar color="red" name="Wis Design" colorSchema="outline" size="sm" />
        <Avatar color="red" name="Wis Design" colorSchema="outline" size="xs" />

        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="red"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col}>
        <Avatar color="green" name="Wis Design" size="lg" />
        <Avatar color="green" name="Wis Design" />
        <Avatar color="green" name="Wis Design" size="sm" />
        <Avatar color="green" name="Wis Design" size="xs" />

        <Avatar color="green" name="Wis Design" size="lg" shape="square" />
        <Avatar color="green" name="Wis Design" shape="square" />
        <Avatar color="green" name="Wis Design" size="sm" shape="square" />
        <Avatar color="green" name="Wis Design" size="xs" shape="square" />

        <Avatar color="green" name="Wis Design" colorSchema="dark" size="lg" />
        <Avatar color="green" name="Wis Design" colorSchema="dark" />
        <Avatar color="green" name="Wis Design" colorSchema="dark" size="sm" />
        <Avatar color="green" name="Wis Design" colorSchema="dark" size="xs" />

        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="dark"
          size="lg"
          shape="square"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="dark"
          shape="square"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="dark"
          size="sm"
          shape="square"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="dark"
          size="xs"
          shape="square"
        />

        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
        />
        <Avatar color="green" name="Wis Design" colorSchema="outline" />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
        />

        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          size="lg"
          shape="square"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          shape="square"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          size="sm"
          shape="square"
        />
        <Avatar
          color="green"
          name="Wis Design"
          colorSchema="outline"
          size="xs"
          shape="square"
        />
      </div>
      <div className={styles.col2}>
        <AvatarGroup size="lg">
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
          <Avatar
            name="Wis Design"
            src="https://avatars.githubusercontent.com/u/174254765?s=48&v=4"
          />
        </AvatarGroup>
      </div>
      <div className={styles.col2}>
        <AvatarGroup size="lg">
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
        </AvatarGroup>
      </div>
      <div className={styles.col2}>
        <AvatarGroup>
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
        </AvatarGroup>
      </div>
      <div className={styles.col2}>
        <AvatarGroup size="sm">
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
        </AvatarGroup>
      </div>
      <div className={styles.col2}>
        <AvatarGroup size="xs">
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
          <Avatar name="Wis Design" />
        </AvatarGroup>
      </div>
    </div>
  );
}

export default Example;
