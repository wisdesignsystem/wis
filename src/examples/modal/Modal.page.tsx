import { useRef } from "react";

import { Page } from "wis/page";
import { Button } from "wis/button";
import { Link } from "wis/link";
import { Actions } from "wis/actions";
import { Modal, type ModalRef } from "wis/modal";
import { ToggleTip, ToggleTipActions } from "wis/toggleTip";

export default function () {
  const modal = useRef<ModalRef>(null);
  const centerModal = useRef<ModalRef>(null);

  return (
    <Page title="Modal Example">
      <Actions>
        <Button
          text="Open"
          onClick={() => {
            modal.current?.show();
          }}
        />
        <Button
          text="Open Center"
          onClick={() => {
            centerModal.current?.show();
          }}
        />
      </Actions>

      <Modal
        ref={modal}
        title="Modal Title"
        description="Modal Description"
        maskCloseable
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
        <Actions>
          <Button
            text="Cancel"
            onClick={() => {
              modal.current?.hide();
            }}
          />
          <Button text="Confirm" variant="primary" />
        </Actions>

        <div style={{ height: "1000px" }}>模拟很长的内容啊啊啊</div>
      </Modal>

      <Modal
        ref={centerModal}
        title="Modal Title"
        center
        modal={false}
        width={800}
        height={1000}
        description="Modal Description"
        maskCloseable
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
        <Actions>
          <Button
            text="Cancel"
            onClick={() => {
              centerModal.current?.hide();
            }}
          />
          <Button text="Confirm" variant="primary" />
        </Actions>

        <div style={{ height: "1000px" }}>模拟很长的内容啊啊啊</div>
      </Modal>
    </Page>
  );
}
