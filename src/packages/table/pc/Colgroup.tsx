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

        let style: undefined | CSSProperties = { width: `${column.width}px` };
        if (column.ignoreWidth) {
          style = undefined;
        }

        return <col key={column.name} style={style} data-name={column.name} />;
      })}
    </colgroup>
  );
}

export default Colgroup;
