import { matchElement } from "wis/core";

import Colgroup from "./Colgroup";
import Head from "./Head";
import Body from "./Body";
import useTable from "../useTable";
import type { TableProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function Table<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(props: TableProps<R, P>) {
  const {
    elements: { Column: columnElements },
  } = matchElement(props.children, ["Column"]);

  useTable<R, P>(props, {
    columnElements,
  });

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.scroll}>
          <table>
            <Colgroup />
            <Head />
            <Body />
          </table>
        </div>
      </div>
    </div>
  );
}

Table.displayName = "Table";

export default Table;
