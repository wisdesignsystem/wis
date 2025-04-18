import { Page } from "wis/page";
import { Module } from "wis/module";
import { Actions, ActionsGroup } from "wis/actions";
import { Button } from "wis/button";
import { DropdownButton, DropdownItem } from "wis/dropdown";
import { Main, Left } from "wis/layout";
import { Link } from "wis/link";
import { ExportIcon } from "@wisdesign/lsicon";

function Example() {
  return (
    <Page title="Actions Example">
      <Actions>
        <Link text="Link" href="https://wis.design" />

        <Button text="Button" variant="ghost" />
        <Button text="Button" variant="tertiary" />
        <Button text="Button" />

        <ActionsGroup>
          <Button text="Button" />
          <Button text="Button" />
        </ActionsGroup>

        <ActionsGroup>
          <DropdownButton
            text="Export"
            icon={<ExportIcon />}
            iconControl="suffix"
          >
            <DropdownItem label="Excel" value="excel" />
            <DropdownItem label="PDF" value="pdf" />
            <DropdownItem label="CSV" value="csv" />
          </DropdownButton>
          <Button text="Submit" variant="primary" />
        </ActionsGroup>
      </Actions>

      <Main>
        <Module title="module" size={6}>
          <Actions>
            <Button text="Button" />
            <Button text="Submit" variant="primary" />
          </Actions>
          Module Content
        </Module>
        <Module title="module" size={6}>
          <Actions>
            <Button text="Button" />
            <Button text="Submit" variant="primary" />
          </Actions>
          Module Content
        </Module>
      </Main>

      <Left title="Left">
        <Actions>
          <Button text="Button" />
          <Button text="Submit" variant="primary" />
        </Actions>
        Left Content
      </Left>
    </Page>
  );
}

export default Example;
