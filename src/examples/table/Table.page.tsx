import { Page } from "wis/page";
import { Table, Column } from "wis/table";

interface User {
  key: string;
  name: string;
  age: number;
  gender: "Men" | "Women";
  biology: number;
  math: number;
  physics: number;
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Example() {
  const data: User[] = Array.from({ length: 10 }).map((_, index) => {
    return {
      key: `key_${index}`,
      name: "Wis Design",
      age: random(0, 100),
      gender: "Men",
      biology: random(0, 100),
      math: random(0, 100),
      physics: random(0, 100),
      test: "xxx",
    };
  });

  async function queryData() {
    return { data };
  }

  return (
    <Page title="Table" description="Table">
      <div style={{ padding: "24px", height: "100%", boxSizing: "border-box" }}>
        <Table<User> data={queryData} height="auto">
          <Column
            title="Name"
            name="name"
            pinned="left"
            maxWidth={200}
            ellipsis
            align="left"
          >
            {cell.data}
          </Column>
          <Column<User>
            title="Age"
            name="age"
            pinned="left"
            width={160}
            align="right"
            sortable={(a, b) => a.age - b.age}
          >
            {cell.data}
          </Column>
          <Column title="Gender" name="gender" width={200} align="right">
            {cell.data}
          </Column>
          <Column width={200} title="Gender1" name="gender1">
            {cell.data}
          </Column>
          <Column width={200} title="Gender2" name="gender2">
            {cell.data}
          </Column>
          <Column width={200} title="Gender3" name="gender3">
            {cell.data}
          </Column>
          <Column width={200} title="Gender4" name="gender4">
            {cell.data}
          </Column>
          <Column width={200} title="Gender5" name="gender5">
            {cell.data}
          </Column>
          <Column width={200} title="Gender6" name="gender6">
            {cell.data}
          </Column>
          <Column title="Test" name="test" align="right" pinned="right">
            {cell.data}
          </Column>
        </Table>
      </div>
    </Page>
  );
}

export default Example;
