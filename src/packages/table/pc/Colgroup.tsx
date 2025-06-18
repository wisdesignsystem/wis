import type { ColgroupProps, PlainObject } from "../table";

function Colgroup<R extends PlainObject = PlainObject>({
  leafColumns,
  measure,
}: ColgroupProps<R>) {
  return (
    <colgroup>
      {leafColumns.map((column) => {
        if (!column.visible) {
          return null;
        }

        const width = column.width
          ? undefined
          : measure.measureMap[column.name];
        return (
          <col
            key={column.name}
            style={width ? { width: `${width}px` } : undefined}
          />
        );
      })}
    </colgroup>
  );
}

export default Colgroup;
