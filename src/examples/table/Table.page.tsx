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
        <Table<User> data={queryData}>
          <Column
            title="Name"
            name="name"
            pinned="left"
            maxWidth={200}
            ellipsis
            align="center"
          >
            {cell.data}
          </Column>
          <Column<User>
            title="AgeAgeAgeAgeAgeAgeAgeAgeAgeAgeAgeAgeAgeAgeAge"
            name="age"
            pinned="left"
            width={160}
            align="center"
            sortable={(a, b) => a.age - b.age}
          >
            {cell.data}
          </Column>
          <Column title="Gender" name="gender" width={2000}>
            {cell.data}
          </Column>
          <Column title="Fraction" name="fraction" sortable pinned="right">
            <Column title="Physics" name="physics" width={240} pinned="right">
              {cell.data}
            </Column>
            <Column
              title="Biology"
              name="biology"
              colSpan={2}
              width={120}
              pinned="right"
            >
              {cell.data}
            </Column>
            <Column title="Math" name="math" width={120} pinned="right">
              {cell.data}
            </Column>
          </Column>
          <Column title="Test" name="test" width={100}>
            {cell.data}
          </Column>
        </Table>
      </div>
    </Page>
  );
}

export default Example;
