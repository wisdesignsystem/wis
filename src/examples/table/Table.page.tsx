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
  const data: User[] = Array.from({ length: 100 }).map((_, index) => {
    return {
      key: `key_${index}`,
      name: "Wis Design",
      age: random(0, 100),
      gender: "Men",
      biology: random(0, 100),
      math: random(0, 100),
      physics: random(0, 100),
    };
  });

  async function queryData() {
    return { data };
  }

  return (
    <Page title="Table" description="Table">
      <Table<User> data={queryData} height="auto">
        <Column
          title="Name"
          colSpan={2}
          name="name"
          pinned="left"
          maxWidth={200}
        >
          {cell.data}
        </Column>
        <Column<User> title="Age" name="age" sortable={(a, b) => a.age - b.age}>
          {cell.data}
        </Column>
        <Column title="Gender" name="gender" width={150}>
          {cell.data}
        </Column>
        <Column title="Fraction" name="fraction" sortable pinned="left">
          <Column
            title="Biology"
            name="biology"
            align="center"
            colSpan={2}
            width={120}
            pinned="right"
          >
            {cell.data}
          </Column>
          <Column
            title="Math"
            name="math"
            align="center"
            width={120}
            visible={false}
          >
            {cell.data}
          </Column>
          <Column title="Physics" name="physics" align="center" width={240}>
            {cell.data}
          </Column>
        </Column>
      </Table>
    </Page>
  );
}

export default Example;
