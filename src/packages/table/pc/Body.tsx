import type { BodyProps, PlainObject } from "../table";
import Row from "./Row";
import Cell from "./Cell";

function Body<R extends PlainObject = PlainObject>({
  rowKey,
  data,
  leafColumns,
}: BodyProps<R>) {
  return (
    <tbody>
      {data.map((record, rowIndex) => {
        return (
          <Row<R> key={rowKey(record)} record={record}>
            {leafColumns.map((column) => {
              return (
                <Cell<R>
                  key={column.name}
                  rowIndex={rowIndex}
                  rowNo={rowIndex}
                  record={record}
                  column={column}
                />
              );
            })}
          </Row>
        );
      })}
    </tbody>
  );
}

export default Body;
