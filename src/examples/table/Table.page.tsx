import { Page } from "wis/page";
import { Table, Column } from "wis/table";

interface User {
  name: string;
  age: number;
}

function Example() {
  return (
    <Page title="Table" description="Table">
      <Table<User>
        data={async () => {
          return { data: [] };
        }}
      >
        <Column
          name="name"
          sortable={{
            sort: (record1, record2, sort) => {
              record1.name;
              return 0;
            },
          }}
        >
          {cell.rowData.name}
        </Column>
      </Table>
    </Page>
  );
}

export default Example;
