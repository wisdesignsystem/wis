import type { HeadProps, PlainObject } from "../table";
import HeadCell from "./HeadCell";

function Head<R extends PlainObject = PlainObject>({
  layerColumns,
}: HeadProps<R>) {
  return (
    <thead>
      {layerColumns.map((columns) => {
        return (
          // @ts-ignore
          <tr key={columns.key}>
            {columns.map((column) => {
              return <HeadCell key={column.name} column={column} />;
            })}
          </tr>
        );
      })}
    </thead>
  );
}

export default Head;
