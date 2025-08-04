import { useRef, useEffect, useState } from "react";
import { Page } from "wis/page";
import { Table, Column } from "wis/table";
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
  // const data: User[] = Array.from({ length: 10 }).map((_, index) => {
  //   return {
  //     key: `key_${index}`,
  //     name: "Wis Design",
  //     age: random(0, 100),
  //     gender: "Men",
  //     biology: random(0, 100),
  //     math: random(0, 100),
  //     physics: random(0, 100),
  //     test: "sflkjdaslkfjdaslkfjdslakfjlewkjrlkdfjldkasfjladksjflkdsajfldksajflksa",
  //   };
  // });
  const [show, setShow] = useState(false);
  const data = [
    {
      name: "Chengdu",
      age: "1",
      address: "Chengdu, Sichuan, China",
      desc: "Chengdu, the capital of China's Sichuan Province, is a vibrant 'new first-tier' city where modernity blends with ancient charm. Known as the 'Land of Abundance,' it's famous for its laid-back lifestyle, spicy cuisine, and adorable giant pandas.",
    },
    {
      name: "Chengdu",
      age: "1",
      address: "Chengdu, Sichuan, China",
      desc: "Chengdu, the capital of China's Sichuan Province, is a vibrant 'new first-tier' city where modernity blends with ancient charm. Known as the 'Land of Abundance,' it's famous for its laid-back lifestyle, spicy cuisine, and adorable giant pandas.",
    },
    {
      name: "Chengdu",
      age: "1",
      address: "Chengdu, Sichuan, China",
      desc: "Chengdu, the capital of China's Sichuan Province, is a vibrant 'new first-tier' city where modernity blends with ancient charm. Known as the 'Land of Abundance,' it's famous for its laid-back lifestyle, spicy cuisine, and adorable giant pandas.",
    },
  ];
  const drawerRef = useRef<DrawerRef>(null);
  const modalRef = useRef<ModalRef>(null);

  async function queryData() {
    return { data };
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  function renderTable() {
    return (
      <Table data={queryData} title="Table" height={200}>
        <Column title="No." name="no" width={60} pinned="left">
          {cell.rowNo}
        </Column>
        <Column title="Name" name="name" width={120}>
          {cell.data}
        </Column>
        <Column title="Age" name="age" align="right" width={80}>
          {cell.data}
        </Column>
        <Column title="Address" name="address" width={show ? 300 : 240}>
          {cell.data}
        </Column>
        <Column title="Description" name="desc" ellipsis maxWidth={200}>
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

      {/* <Module title="Module Table">{renderTable()}</Module> */}

      {/* <Drawer ref={drawerRef} title="Drawer Table" side="bottom">
        {renderTable()}

        <Module title="Module Table">{renderTable()}</Module>
      </Drawer>

      <Modal ref={modalRef} title="Modal Table" width={600} height={400}>
        {renderTable()}

        <Module title="Module Table">{renderTable()}</Module>
      </Modal> */}
    </Page>
  );
}

export default Example;
