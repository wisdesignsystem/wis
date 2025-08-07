import { useRef, useState, useEffect } from "react";
import { Page } from "wis/page";
import { Table, Column, type TableResponse } from "wis/table";
import { Actions } from "wis/actions";
import { Button } from "wis/button";
import { Drawer, type DrawerRef } from "wis/drawer";
import { Modal, type ModalRef } from "wis/modal";
import { Module } from "wis/module";

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
  const [changedSort, setChangedSort] = useState(false);
  const [data] = useState<User[]>(
    Array.from({ length: 10 }).map((_, index) => {
      return {
        key: `key_${index}`,
        name: "Wis Design",
        age: random(0, 100),
        gender1:
          "sdfkljdsafkljdsaklfjasdklfjasdlkjfklsdajfkldjsaflkjasdklfjadsklfjdsakljfdaskljfkdsalfhadskjfhdsajkfhdskafjhasdkjfhsdkjfhdskjfhsdakjfhdksjfhkjsadhfkjsdahfkjsdhfkjsahdfkjsdah",
        gender: "Men",
        biology: random(0, 100),
        math: random(0, 100),
        physics: random(0, 100),
        test: "Test Data",
      };
    }),
  );

  const drawerRef = useRef<DrawerRef>(null);
  const modalRef = useRef<ModalRef>(null);

  useEffect(() => {
    setTimeout(() => {
      setChangedSort(true);
    }, 5000);
  }, []);

  function queryData(): Promise<TableResponse<User>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data });
      }, 200);
    });
  }

  function renderTable() {
    return (
      <Table<User>
        data={queryData}
        height="auto"
        title="Table title"
        onSortChange={(name, sort) => console.log(name, sort)}
      >
        <Actions>
          <Button text="Upload" />
          <Button text="Submit" variant="primary" />
        </Actions>

        <Column
          title="Name"
          name="name"
          minWidth={120}
          ellipsis
          align="left"
          pinned="left"
        >
          {cell.data}
        </Column>
        <Column<User>
          title="Age"
          name="age"
          width={160}
          align="right"
          sortable={{ type: changedSort ? "asc" : "desc" }}
        >
          {cell.data}
        </Column>
        <Column title="Gender" name="gender" width={200} align="right">
          <div>aaa</div>
        </Column>
        <Column title="Gender1" name="gender1" minWidth={320}>
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
        <Column title="Test" name="test" align="right" pinned="right" ellipsis>
          {cell.data}
        </Column>
      </Table>
    );
  }

  function renderTable2() {
    return (
      <Table<User> data={queryData} height="auto" title="Table title">
        <Actions>
          <Button text="Upload" />
          <Button text="Submit" variant="primary" />
        </Actions>

        <Column
          title="Name"
          name="name"
          pinned="left"
          maxWidth={120}
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
        <Column title="Test" name="test" pinned="right" ellipsis>
          {cell.data}
        </Column>
      </Table>
    );
  }

  return (
    <Page title="Table" description="Table">
      <Actions>
        <Button
          text="Open Drawer Table"
          onClick={() => drawerRef.current?.show()}
        />
        <Button
          text="Open Modal Table"
          onClick={() => modalRef.current?.show()}
        />
      </Actions>

      {renderTable()}

      {/* <Module title="Module Table">{renderTable2()}</Module> */}

      {/* <Drawer ref={drawerRef} title="Drawer Table" side="bottom">
        {renderTable2()}

        <Module title="Module Table">{renderTable2()}</Module>
      </Drawer>

      <Modal ref={modalRef} title="Modal Table" width={600} height={400}>
        {renderTable2()}

        <Module title="Module Table">{renderTable2()}</Module>
      </Modal> */}
    </Page>
  );
}

export default Example;
