import type { ColgroupProps, PlainObject, ColumnMeta } from "../table";

function Colgroup<R extends PlainObject = PlainObject>({
  standard = true,
  leafColumns,
  measure,
}: ColgroupProps<R>) {
  function getWidth(column: ColumnMeta<R>) {
    if (!standard) {
      return measure.measureMap[column.name];
    }

    if (column.ignoreWidth) {
      return;
    }

    if (column.minWidth !== undefined || column.maxWidth !== undefined) {
      return measure.measureMap[column.name];
    }

    return column.width;
  }

  return (
    <colgroup>
      {leafColumns.map((column) => {
        if (!column.visible) {
          return null;
        }

        const width = getWidth(column);

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
