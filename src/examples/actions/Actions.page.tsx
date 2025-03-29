import { Page } from "wis/page";
import { Actions, ActionsGroup } from "wis/actions";
import { Button } from "wis/button";
import { DropdownButton, DropdownItem } from "wis/dropdown";

import styles from "./Actions.module.scss";

function Example() {
  return (
    <Page title="Actions Example">
      <Actions>
        <Button text="Export" />
        <Button text="Import" />
        <Button text="Submit" variant="primary" />

        <ActionsGroup>
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
        </ActionsGroup>
      </Actions>
    </Page>
  );
}

export default Example;
