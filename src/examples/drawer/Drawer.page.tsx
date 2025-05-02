import { useRef } from "react";

import { Drawer } from "wis/drawer";
import type { DrawerRef } from "wis/drawer";
import { Page } from "wis/page";
import { Actions } from "wis/actions";
import { Button } from "wis/button";
import { ToggleTip, ToggleTipActions } from "wis/toggleTip";
import { Link } from "wis/link";

export default function Example() {
  const bottom = useRef<DrawerRef>(null);
  const right = useRef<DrawerRef>(null);

  return (
    <Page
      title="Drawer Demo"
      toggleTip={
        <ToggleTip text="Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world">
          <ToggleTipActions>
            <Link text="link" href="https://wis.design" />
            <Button text="Button" />
          </ToggleTipActions>
        </ToggleTip>
      }
    >
      <Actions>
        <Button text="Right" onClick={() => right.current?.show()} />
        <Button
          text="Bottom"
          variant="primary"
          onClick={() => bottom.current?.show()}
        />
      </Actions>

      <Drawer
        ref={bottom}
        title="Drawer Title"
        maskCloseable={false}
        description="Drawer Description"
        toggleTip={
          <ToggleTip text="Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world">
            <ToggleTipActions>
              <Link text="link" href="https://wis.design" />
              <Button text="Button" />
            </ToggleTipActions>
          </ToggleTip>
        }
        onOpen={(open) => console.log("changed", open)}
      >
        xxx
        <Actions>
          <Button text="Cancel" />
          <Button text="Confirm" variant="primary" />
        </Actions>
      </Drawer>

      <Drawer
        ref={right}
        side="right"
        closeable={false}
        maskCloseable={false}
        modal={false}
        title="Drawer Title"
        description="Drawer Description"
        toggleTip={
          <ToggleTip text="Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world">
            <ToggleTipActions>
              <Link text="link" href="https://wis.design" />
              <Button text="Button" />
            </ToggleTipActions>
          </ToggleTip>
        }
        onOpen={(open) => console.log("changed", open)}
      >
        xxx
        <Actions>
          <Button text="Cancel" />
          <Button text="Confirm" variant="primary" />
        </Actions>
      </Drawer>
    </Page>
  );
}
