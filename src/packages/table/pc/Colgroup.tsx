import type { CSSProperties } from "react";

import type { ColgroupProps, PlainObject } from "../table";

function Colgroup<R extends PlainObject = PlainObject>({
  leafColumns,
}: ColgroupProps<R>) {
  return (
    <colgroup>
      {leafColumns.map((column) => {
        if (!column.visible) {
          return null;
        }

        const style: undefined | CSSProperties = { minWidth: "80px" };
        if (!column.ignoreWidth && column.width !== undefined) {
          style.width = `${column.width}px`;
        }

        return <col key={column.name} style={style} data-name={column.name} />;
      })}
    </colgroup>
  );
}

export default Colgroup;
