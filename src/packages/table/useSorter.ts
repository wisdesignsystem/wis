import { useState } from "react";

import type {
  ColumnMeta,
  Sort,
  SortState,
  SortController,
  PlainObject,
  TableProps,
} from "./table";
import { SortType, OrderType } from "./table";

type Option<R extends PlainObject = PlainObject> = Pick<
  TableProps<R>,
  "sortMode"
> & {
  sortsController: SortController[];
  columnMap: Record<string, ColumnMeta<R>>;
};

interface Operator<R extends PlainObject = PlainObject> {
  set: (sort: SortState | SortState[]) => void;
  next: (name: string, type?: SortType) => void;
  remove: (name: string) => void;
  reset: () => void;
  clear: () => void;
  sort: (data: R[]) => R[];
}
export interface Sorter<R extends PlainObject = PlainObject> {
  sort?: Sort | Sort[];
  sortMap: Record<string, Sort>;
  operator: Operator<R>;
}

export function useSorter<R extends PlainObject = PlainObject>({
  sortsController,
  sortMode = "reset",
  columnMap,
}: Option<R>): Sorter<R> {
  const [sortsState, setSortsState] = useState<SortState[]>(
    getDefaultSortsState(),
  );

  function getDefaultSortsState() {
    let sortsState: SortState[] = [];
    for (const sortController of sortsController) {
      const column = columnMap[sortController.name];
      if (sortController.defaultType === undefined) {
        continue;
      }

      const sortState: SortState = {
        name: sortController.name,
        type: sortController.defaultType,
      };
      const isSingleSort = column.sortable?.priority === undefined;
      // when single sort, only first sort defaultType will be used.
      if (isSingleSort) {
        sortsState = [sortState];
        break;
      }

      // multiple sort
      sortsState.push(sortState);
    }

    return sortsState;
  }

  function nextSortType(type?: SortType) {
    if (type === undefined) {
      return SortType.Asc;
    }

    if (type === SortType.Asc) {
      return SortType.Desc;
    }

    if (sortMode === "toggle") {
      return SortType.Asc;
    }
  }

  function get(): undefined | Sort | Sort[] {
    if (sortsController.length <= 0) {
      return;
    }

    const visited = new Map();
    let isMultiple = false;
    let isBreak = false;
    let sorts: Sort[] = [];
    for (const sortController of sortsController) {
      const column = columnMap[sortController.name];

      isMultiple = isMultiple || column.sortable?.priority !== undefined;

      if (sortController.type === undefined) {
        continue;
      }

      visited.set(sortController.name, true);

      const sort: Sort = {
        name: sortController.name,
        type: sortController.type,
        priority: column.sortable?.priority,
      };
      const isSingleSort = column.sortable?.priority === undefined;
      if (isSingleSort) {
        sorts = [sort];
        isBreak = true;
        break;
      }

      sorts.push(sort);
    }

    if (isBreak) {
      // only user set the single controlled sort type will been break.
      return sorts[0];
    }

    for (const sortState of sortsState) {
      const column = columnMap[sortState.name];
      if (column === undefined) {
        continue;
      }

      if (visited.get(sortState.name)) {
        continue;
      }

      sorts.push({
        name: sortState.name,
        type: sortState.type,
        priority: column.sortable?.priority,
      });
    }

    return isMultiple ? sorts : sorts[0];
  }

  function set(sort: SortState | SortState[]) {
    let nextSort: SortState[] = [];
    if (!Array.isArray(sort)) {
      nextSort = [sort];
    }

    const sortableMap = sortsController.reduce((result, controller) => {
      result.set(controller.name, true);
      return result;
    }, new Map());

    setSortsState(nextSort.filter((sort) => sortableMap.get(sort.name)));
  }

  function next(name: string, type?: SortType) {
    const nextType = nextSortType(type);
    const column = columnMap[name];
    if (column === undefined) {
      return;
    }

    let nextSortsState: SortState[] = [];
    if (column.sortable?.priority !== undefined) {
      // multiple sort
      // remove the single sort column.
      nextSortsState = sortsState.filter((sortState) => {
        const currentColumn = columnMap[sortState.name];
        return currentColumn.sortable?.priority !== undefined;
      });
    } else {
      // single sort
      // nothing need to do, remove all other sort column.
    }

    const sortIndex = nextSortsState.findIndex((sortState) => {
      return sortState.name === name;
    });

    if (sortIndex === -1) {
      if (nextType !== undefined) {
        nextSortsState.push({ name, type: nextType });
      }
      setSortsState(nextSortsState);
      return;
    }

    if (nextType === undefined) {
      nextSortsState.splice(sortIndex, 1);
    } else {
      nextSortsState[sortIndex] = { name, type: nextType };
    }
    setSortsState(nextSortsState);
  }

  function remove(name: string) {
    const nextSortsState = sortsState.filter(
      (sortState) => sortState.name !== name,
    );
    setSortsState(nextSortsState);
  }

  function reset() {
    setSortsState(getDefaultSortsState());
  }

  function clear() {
    setSortsState([]);
  }

  function sort(data: R[]): R[] {
    let sorts = get();
    if (sorts === undefined || (Array.isArray(sorts) && sorts.length <= 0)) {
      return data;
    }

    if (!Array.isArray(sorts)) {
      sorts = [sorts];
    }

    sorts = sorts
      .filter((sort) => {
        const column = columnMap[sort.name];
        return (
          column !== undefined && typeof column.sortable?.compare === "function"
        );
      })
      .sort((a, b) => {
        return (a.priority ?? 0) - (b.priority ?? 0);
      });

    if (sorts.length <= 0) {
      return data;
    }

    const result = data.slice().sort((a, b) => {
      for (const sort of sorts) {
        const column = columnMap[sort.name];

        const compare = column.sortable?.compare ?? (() => OrderType.EQUAL);

        const compareResult =
          sort.type === SortType.Asc ? compare(a, b) : compare(b, a);
        if (compareResult === OrderType.EQUAL) {
          continue;
        }

        return compareResult;
      }

      return OrderType.EQUAL;
    });

    return result;
  }

  const currentSort = get();

  function getSortMap(sort?: Sort | Sort[]): Record<string, Sort> {
    if (sort === undefined) {
      return {};
    }

    let sorts: Sort[] = [];
    if (!Array.isArray(sort)) {
      sorts = [sort];
    } else {
      sorts = sort;
    }

    return sorts.reduce(
      (result, sort) => {
        result[sort.name] = sort;
        return result;
      },
      {} as Record<string, Sort>,
    );
  }

  return {
    sort: currentSort,
    sortMap: getSortMap(currentSort),
    operator: { set, next, remove, reset, clear, sort },
  };
}
