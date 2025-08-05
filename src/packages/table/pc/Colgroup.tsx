import type { ColgroupProps, PlainObject } from "../table";

function Colgroup<R extends PlainObject = PlainObject>({
  measure,
  leafColumns,
}: ColgroupProps<R>) {
  return (
    <colgroup>
      {leafColumns.map((column) => {
        if (!column.visible) {
          return null;
        }
        return (
          <col
            key={column.name}
            style={{
              minWidth: "60px",
              width: `${measure.getColumnWidth(column)}px`,
            }}
          />
        );
      })}
    </colgroup>
  );
}

export default Colgroup;
