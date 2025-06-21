import type { BodyProps, PlainObject } from "../table";
import Row from "./Row";
import MeasureRow from "./MeasureRow";
import Cell from "./Cell";

function Body<R extends PlainObject = PlainObject>({
  rowKey,
  data,
  leafColumns,
  measure,
  sizeObserver,
}: BodyProps<R>) {
  return (
    <tbody>
      {data.length > 0 && (
        <MeasureRow
          measure={measure}
          leafColumns={leafColumns}
          sizeObserver={sizeObserver}
        />
      )}
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
