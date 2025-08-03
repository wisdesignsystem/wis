import type { CSSProperties, Ref, ReactNode } from "react";
import {
  cloneElement,
  useContext,
  useImperativeHandle,
  forwardRef,
} from "react";
import { matchElement, ComponentTypeContext } from "wis/core";
import attrs from "@/utils/attrs";

import Colgroup from "./Colgroup";
import Head from "./Head";
import PinnedHead from "./PinnedHead";
import Body from "./Body";
import useTable from "../useTable";
import type { TableProps, PlainObject, TableRef } from "../table";

import styles from "./Table.module.scss";

const Table = forwardRef(function Table<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(props: TableProps<R, P>, ref: Ref<TableRef<R, P>>) {
  const inComponentType = useContext(ComponentTypeContext);
  const {
    elements: { Column: columnElements, Actions: actions },
  } = matchElement(props.children, [
    "Column",
    { type: "Actions", maxCount: 1 },
  ]);

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
    separator,
  } = useTable<R, P>(props, {
    columnElements,
  });

  function renderActions() {
    if (actions === undefined) {
      return null;
    }

    return cloneElement(actions[0], { size: "sm" });
  }

  useImperativeHandle(ref, () => {
    return {
      query: datasource.operator.query,
      getData: datasource.operator.getData,
    };
  });

  const isShowHeader = props.title !== undefined || !!actions;

  return (
    <div
      ref={tableRef}
      className={styles.table}
      {...attrs({
        "data-border": inComponentType === "grid",
        "data-separator": separator,
        "data-pinned-separator": measure.pinnedSeparator,
      })}
      style={
        {
          "--wis-table-variable-height": height,
          "--wis-table-variable-scroll-x": `${scroller.x}px`,
          "--wis-table-variable-scroll-y": `${scroller.y}px`,
          visibility: measure.ready ? "visible" : "hidden",
        } as CSSProperties
      }
    >
      {isShowHeader && (
        <div className={styles.header}>
          <span>{props.title}</span>
          <div className={styles.actions}>{renderActions()}</div>
        </div>
      )}
      {height !== "auto" && (
        <div className={styles["head-container"]}>
          <div
            ref={tableHeaderRef}
            className={styles.head}
            onScroll={scroller.onScroll}
          >
            <PinnedHead<R>
              measure={measure}
              leafColumns={leafColumns}
              layerColumns={layerColumns}
              sorter={sorter}
            />
          </div>
        </div>
      )}
      <div
        ref={tableMainRef}
        className={styles.main}
        onScroll={scroller.onScroll}
      >
        <table
          className={styles.content}
          style={{ width: `${measure.totalColumnWidth - 10}px` }}
        >
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
}) as (<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(
  props: TableProps<R, P>,
  ref: Ref<TableRef<R, P>>,
) => ReactNode) & { displayName: string };

Table.displayName = "Table";

export default Table;
