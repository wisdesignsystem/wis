import { Actions } from "remote:wis/actions";
import { Button } from "remote:wis/button";
import { Bottom, Left, Main, Top } from "remote:wis/layout";
import { Module } from "remote:wis/module";
import { Page } from "remote:wis/page";
import { ArrowRightIcon, DownloadIcon, ExportIcon } from "@wisdesign/lsicon";

import Chart from "./Chart";
import Metric from "./Metric";
import Power from "./Power";
import Search from "./Search";
import Table from "./Table";
import Tree from "./Tree";

function Example() {
  return (
    <Page
      title="This is a very cool example"
      description="I will show you how to complete the overall structure of the page without using any styles through this code example"
    >
      <Actions>
        <Button
          text="Download"
          variant="ghost"
          icon={<DownloadIcon />}
          iconControl="suffix"
        />
        <Button
          text="Export"
          variant="primary"
          icon={<ExportIcon />}
          iconControl="suffix"
        />
      </Actions>
      <Left title="Categories">
        <Actions>
          <Button icon={<ArrowRightIcon />} variant="ghost" />
        </Actions>
        <Tree />
      </Left>
      <Main>
        <Top>
          <Search />
        </Top>
        <Module title="Sales" size="4">
          <Metric />
        </Module>
        <Module title="Price" size="4">
          <Metric />
        </Module>
        <Module title="Percent" size="4">
          <Metric />
        </Module>
        <Module title="Business Analysis" variant="ghost">
          <Module title="Trend of business">
            <Chart />
          </Module>
          <Module title="Rank of business">
            <Table />
          </Module>
        </Module>
      </Main>
      <Bottom>
        <Power />
      </Bottom>
    </Page>
  );
}

export default Example;
