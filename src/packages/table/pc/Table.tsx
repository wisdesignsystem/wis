import type { CSSProperties } from "react";
import { matchElement } from "wis/core";

import Colgroup from "./Colgroup";
import Head from "./Head";
import PinnedHead from "./PinnedHead";
import Body from "./Body";
import useTable from "../useTable";
import calcHeight from "../calcHeight";
import type { TableProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function Table<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(props: TableProps<R, P>) {
  const {
    elements: { Column: columnElements },
  } = matchElement(props.children, ["Column"]);

  const {
    tableRef,
    getRowKey,
    datasource,
    leafColumns,
    layerColumns,
    sorter,
    measure,
    sizeObserver,
  } = useTable<R, P>(props, {
    columnElements,
  });

  const height = calcHeight(props.height);

  return (
    <div
      ref={tableRef}
      className={styles.container}
      style={
        {
          "--wis-table-variable-height": height,
        } as CSSProperties
      }
    >
      {height !== "auto" && (
        <div className={styles.header}>
          <PinnedHead<R>
            leafColumns={leafColumns}
            layerColumns={layerColumns}
            sorter={sorter}
          />
        </div>
      )}
      <div className={styles.scroll}>
        <table data-type="main-table" className={styles.table}>
          <Colgroup<R> leafColumns={leafColumns} />
          {height === "auto" && (
            <Head<R> layerColumns={layerColumns} sorter={sorter} />
          )}
          <Body<R>
            rowKey={getRowKey}
            leafColumns={leafColumns}
            data={datasource.data}
            measure={measure}
            sizeObserver={sizeObserver}
          />
        </table>
      </div>
    </div>
  );
}

Table.displayName = "Table";

export default Table;
