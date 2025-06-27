import type { CSSProperties } from "react";

import type { ColgroupProps, PlainObject } from "../table";

function Colgroup<R extends PlainObject = PlainObject>({
  primary,
  measure,
  leafColumns,
}: ColgroupProps<R>) {
  return (
    <colgroup>
      {leafColumns.map((column) => {
        if (!column.visible) {
          return null;
        }

        function getPrimaryWidth() {
          if (column.width !== undefined) {
            return `${column.width}px`;
          }

          if (column.minWidth !== undefined || column.maxWidth !== undefined) {
            return `${measure.columnWidthMap[column.name]}px`;
          }
        }

        function getSecondaryWidth() {
          return `${column.width ?? measure.columnWidthMap[column.name]}px`;
        }

        const style: undefined | CSSProperties = { minWidth: "80px" };
        if (!primary) {
          style.width = getSecondaryWidth();
        } else {
          style.width = getPrimaryWidth();
        }

        return <col key={column.name} style={style} />;
      })}
    </colgroup>
  );
}

export default Colgroup;
