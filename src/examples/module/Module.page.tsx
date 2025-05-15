import { Left, Right } from "wis/layout";
import { Button } from "wis/button";
import { Link } from "wis/link";
import { Module } from "wis/module";
import { Page } from "wis/page";
import { ToggleTip, ToggleTipActions } from "wis/toggleTip";

function Example() {
  return (
    <Page title="Page title" description="description">
      <Left title="Left Title">
        {/* <Module title="Module Title" description="description" /> */}
        {/* <Module title="Module Title" description="description" /> */}
        <p>xxxx</p>
      </Left>
      <Module
        title="Module Title"
        description="description"
        toggleTip={
          <ToggleTip text="The toggle tip content text">
            <ToggleTipActions>
              <Link text="Link" href="https://wis.design" />
              <Button text="Button" />
            </ToggleTipActions>
          </ToggleTip>
        }
        size={{ base: 4, md: 8 }}
      />
      <Module
        title="Module Title"
        description="description"
        size={{ base: 8, md: 4 }}
      >
        <Module
          title="Module Title"
          description="description"
          variant="ghost"
          size={6}
        >
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
        <Module
          title="Module Title"
          description="description"
          variant="ghost"
          size={6}
        >
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
      </Module>
      <Module
        title="Module Title"
        description="description"
        size={8}
        variant="ghost"
        collapsible
      >
        <Module title="Module Title" description="description" size={6}>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
        <Module title="Module Title" description="description" size={6}>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
      </Module>
      <Module
        title="Module Title"
        description="description"
        size={4}
        variant="ghost"
      >
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
      </Module>
      <Right title="Right Title" description="description">
        <Module title="Module Title" description="description" />
      </Right>
    </Page>
  );
}

export default Example;
