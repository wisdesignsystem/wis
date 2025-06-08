import type { ColgroupProps, PlainObject } from "../table";

function Colgroup<R extends PlainObject = PlainObject>({
  leafColumns,
}: ColgroupProps<R>) {
  return (
    <colgroup>
      {leafColumns.map((column) => {
        return (
          <col
            key={column.name}
            style={column.width ? { width: `${column.width}px` } : undefined}
          />
        );
      })}
    </colgroup>
  );
}

export default Colgroup;
