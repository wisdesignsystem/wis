import { Page } from "wis/page";
import { Table, Column } from "wis/table";

function Example() {
  return (
    <Page title="Table" description="Table">
      <Table>
        <Column name="name">{cell.data}</Column>
        <Column name="group">
          <Column name="age">{cell.data}</Column>
          <Column name="year">{cell.data}</Column>
        </Column>
      </Table>
    </Page>
  );
}

export default Example;
