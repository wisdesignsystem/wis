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
  const data: User[] = Array.from({ length: 1000 }).map((_, index) => {
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

  return (
    <Page title="Table" description="Table">
      <Table<User> data={data}>
        <Column title="Name" name="name" width={300}>
          {cell.data}
        </Column>
        <Column title="Age" name="age" sortable>
          {cell.data}
        </Column>
        <Column title="Gender" name="gender">
          {cell.data}
        </Column>
        <Column title="Fraction" name="fraction" sortable>
          <Column title="Biology" name="biology" align="center" colSpan={2}>
            {cell.data}
          </Column>
          <Column
            title="Math"
            name="math"
            align="center"
            defaultVisible={false}
          >
            {cell.data}
          </Column>
          <Column title="Physics" name="physics" align="center">
            {cell.data}
          </Column>
        </Column>
      </Table>
    </Page>
  );
}

export default Example;
