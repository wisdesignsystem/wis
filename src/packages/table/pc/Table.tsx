import type { CSSProperties } from "react";
import { matchElement } from "wis/core";

import Colgroup from "./Colgroup";
import Head from "./Head";
import PinnedHead from "./PinnedHead";
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

  const {
    tableRef,
    tableHeaderRef,
    tableMainRef,
    getRowKey,
    height,
    datasource,
    leafColumns,
    layerColumns,
    sorter,
    measure,
    scroller,
  } = useTable<R, P>(props, {
    columnElements,
  });

  return (
    <div
      ref={tableRef}
      className={styles.container}
      style={
        {
          "--wis-table-variable-height": height,
          visibility: measure.ready ? "visible" : "hidden",
        } as CSSProperties
      }
    >
      {height !== "auto" && (
        <div
          ref={tableHeaderRef}
          className={styles.header}
          onScroll={scroller.onScroll}
        >
          <PinnedHead<R>
            measure={measure}
            leafColumns={leafColumns}
            layerColumns={layerColumns}
            sorter={sorter}
          />
        </div>
      )}
      <div
        ref={tableMainRef}
        className={styles.main}
        onScroll={scroller.onScroll}
      >
        <table className={styles.table}>
          <Colgroup<R> primary measure={measure} leafColumns={leafColumns} />
          {height === "auto" && (
            <Head<R>
              measure={measure}
              layerColumns={layerColumns}
              sorter={sorter}
            />
          )}
          <Body<R>
            rowKey={getRowKey}
            leafColumns={leafColumns}
            data={datasource.data}
            measure={measure}
          />
        </table>
      </div>
    </div>
  );
}

Table.displayName = "Table";

export default Table;
