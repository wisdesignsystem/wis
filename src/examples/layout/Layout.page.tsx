import { Actions } from "wis/actions";
import { Button } from "wis/button";
import { Link } from "wis/link";
import { ContextMenu, ContextMenuItem } from "wis/contextMenu";
import { Bottom, Left, Main, Right, Top } from "wis/layout";
import { Page } from "wis/page";
import { Tooltip } from "wis/tooltip";
import { ToggleTip, ToggleTipActions } from "wis/toggleTip";

function Example() {
  return (
    <Page
      title="Page title"
      description="description of page content"
      toggleTip={
        <ToggleTip text="The toggle tip content text">
          <ToggleTipActions>
            <Link text="Link" href="https://wis.design" />
            <Button text="Button" />
          </ToggleTipActions>
        </ToggleTip>
      }
    >
      <Actions>
        <Button text="Edit" />
        <Button text="Save" variant="primary" />
      </Actions>
      <Top>Top Content</Top>
      <ContextMenu>
        <Tooltip text="Tooltip">
          <Left title="Left Title">
            Left Content
            <Actions>
              <Button text="Cancel" size="sm" />
              <Button text="Confirm" size="sm" variant="primary" />
            </Actions>
          </Left>
        </Tooltip>

        <ContextMenuItem label="Desktop" value="desktop" />
        <ContextMenuItem label="Tablet" value="tablet" />
        <ContextMenuItem label="Mobile" value="mobile" />
      </ContextMenu>
      <ContextMenu>
        <Main
          title="Main Title"
          toggleTip={
            <ToggleTip text="The toggle tip content text">
              <ToggleTipActions>
                <Link text="Link" href="https://wis.design" />
                <Button text="Button" />
              </ToggleTipActions>
            </ToggleTip>
          }
        >
          <Top>Inner Top Content</Top>
          <Left>Inner Left Content</Left>
          <div style={{ height: "2000px" }}>Main Content</div>
          <Right>Inner Right Content</Right>
          <Bottom>Inner Bottom Content</Bottom>
        </Main>

        <ContextMenuItem label="Desktop" value="desktop" />
        <ContextMenuItem label="Tablet" value="tablet" />
        <ContextMenuItem label="Mobile" value="mobile" />
      </ContextMenu>
      <Right title="Right Title" description="description of right content">
        <Top>Right Top Content</Top>
        Right Content
        <Bottom>Right Bottom Content</Bottom>
      </Right>
      <Bottom title="Bottom Title">
        <Actions>
          <Button text="Cancel" size="sm" />
          <Button text="Confirm" size="sm" variant="primary" />
        </Actions>
        Bottom Content
      </Bottom>
    </Page>
  );
}

export default Example;
