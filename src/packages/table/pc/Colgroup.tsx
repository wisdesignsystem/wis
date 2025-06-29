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
        const style: undefined | CSSProperties = { minWidth: "80px" };
        if (!primary) {
          style.width = `${measure.getSecondaryColumnWidth(column)}px`;
        } else {
          style.width = `${measure.getPrimaryColumnWidth(column)}px`;
        }

        return <col key={column.name} style={style} />;
      })}
    </colgroup>
  );
}

export default Colgroup;
