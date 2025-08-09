import { useState } from "react";

import type { Sort, PlainObject, TableProps } from "./table";
import { OrderType } from "./table";
import type { Datasource } from "./useDatasource";
import type { Columns } from "./useColumns";

interface Operator<R extends PlainObject = PlainObject> {
  set: (name: string, type?: "asc" | "desc") => void;
  next: (name: string) => void;
  remove: (name: string) => void;
  reset: () => void;
  clear: () => void;
  sort: (data: R[]) => R[];
}
export interface Sorter<R extends PlainObject = PlainObject> {
  key: string;
  sort?: Sort | Sort[];
  sortMap: Record<string, Sort>;
  operator: Operator<R>;
}

type Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> = Pick<TableProps<R>, "sortMode" | "onSortChange"> & {
  datasource: Datasource<R, P>;
  columns: Columns<R>;
};

export function useSorter<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({
  datasource,
  columns,
  sortMode = "reset",
  onSortChange = () => {},
}: Option<R, P>): Sorter<R> {
  const [sortsState, setSortsState] = useState<Sort[]>(getDefaultSortsState());

  const currentSort = get(sortsState);
  const sortMap = getSortMap(currentSort);
  const key = getSortKey(currentSort);

  function hasMultipleSort() {
    return columns.sortsController.some((controller) => {
      const column = columns.leafColumnMap[controller.name];
      return column?.visible && column?.sortable?.priority !== undefined;
    });
  }

  function isControlSort(name: string) {
    return columns.sortsController.some(
      (item) => item.name === name && item.type !== undefined,
    );
  }

  function getSortKey(sort?: Sort | Sort[]) {
    if (sort === undefined) {
      return "";
    }

    let sorts: Sort[] = [];
    if (!Array.isArray(sort)) {
      sorts = [sort];
    } else {
      sorts = sort;
    }

    const currentSorts = sorts.filter((sort) => {
      const column = columns.leafColumnMap[sort.name];
      return column?.visible && sort.type !== undefined;
    });
    currentSorts.sort((a, b) => {
      if (a.name > b.name) {
        return OrderType.GREATER;
      }

      if (a.name < b.name) {
        return OrderType.LESS;
      }

      return OrderType.EQUAL;
    });

    return JSON.stringify(currentSorts);
  }

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

  function getDefaultSortsState() {
    let sortsState: Sort[] = [];
    for (const sortController of columns.sortsController) {
      const column = columns.leafColumnMap[sortController.name];
      if (column === undefined || sortController.defaultType === undefined) {
        continue;
      }

      const sortState: Sort = {
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

  function getNextSortsState(name: string, type?: "asc" | "desc") {
    const column = columns.leafColumnMap[name];
    if (column === undefined) {
      return;
    }

    if (isControlSort(name)) {
      return;
    }

    let nextSortsState: Sort[] = [];
    if (column.sortable?.priority !== undefined) {
      // multiple sort
      // remove the single sort column.
      nextSortsState = sortsState.filter((sortState) => {
        const currentColumn = columns.leafColumnMap[sortState.name];
        return currentColumn.sortable?.priority !== undefined;
      });
    } else {
      // single sort
      // nothing need to do, remove all other sort column.
      nextSortsState = [];
    }

    const sortIndex = nextSortsState.findIndex((sortState) => {
      return sortState.name === name;
    });

    if (sortIndex === -1) {
      if (type !== undefined) {
        nextSortsState.push({
          name,
          type: type,
        });
      }
      return nextSortsState;
    }

    if (type === undefined) {
      nextSortsState.splice(sortIndex, 1);
    } else {
      nextSortsState[sortIndex] = { name, type };
    }

    return nextSortsState;
  }

  function nextSortType(type?: "asc" | "desc") {
    if (type === undefined) {
      return "asc";
    }

    if (type === "asc") {
      return "desc";
    }

    if (sortMode === "toggle") {
      return "asc";
    }
  }

  function get(sortsState: Sort[]): undefined | Sort | Sort[] {
    if (columns.sortsController.length <= 0) {
      return;
    }

    const visited = new Map();
    let isBreak = false;
    let sorts: Sort[] = [];
    for (const sortController of columns.sortsController) {
      const column = columns.leafColumnMap[sortController.name];

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
      const column = columns.leafColumnMap[sortState.name];
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

    return hasMultipleSort() ? sorts : sorts[0];
  }

  const set: Operator<R>["set"] = async (name, type) => {
    const nextSortsState = getNextSortsState(name, type);
    if (nextSortsState === undefined) {
      return;
    }

    const column = columns.leafColumnMap[name];
    const isServerSort = column?.sortable?.compare === undefined;
    if (isServerSort) {
      await datasource.operator.query({ sort: get(nextSortsState) });
      setSortsState(nextSortsState);
    } else {
      setSortsState(nextSortsState);
    }
  };

  const next: Operator<R>["next"] = async (name) => {
    const currentSort = sortMap[name];
    const nextType = nextSortType(currentSort?.type);

    const nextSortsState = getNextSortsState(name, nextType);
    onSortChange(name, nextType, get(nextSortsState ?? sortsState));
    if (nextSortsState === undefined) {
      return;
    }

    const column = columns.leafColumnMap[name];
    const isServerSort = column?.sortable?.compare === undefined;
    if (isServerSort) {
      await datasource.operator.query({ sort: get(nextSortsState) });
      setSortsState(nextSortsState);
    } else {
      setSortsState(nextSortsState);
    }
  };

  const remove: Operator<R>["remove"] = (name) => {
    const nextSortsState = sortsState.filter(
      (sortState) => sortState.name !== name,
    );
    setSortsState(nextSortsState);
  };

  const reset: Operator<R>["reset"] = () => {
    setSortsState(getDefaultSortsState());
  };

  const clear: Operator<R>["clear"] = () => {
    setSortsState([]);
  };

  const sort: Operator<R>["sort"] = (data) => {
    let sorts = get(sortsState);
    if (sorts === undefined || (Array.isArray(sorts) && sorts.length <= 0)) {
      return data;
    }

    if (!Array.isArray(sorts)) {
      sorts = [sorts];
    }

    // only all sort config the compare function
    sorts = sorts
      .filter((sort) => {
        const column = columns.leafColumnMap[sort.name];
        return column?.sortable?.compare !== undefined;
      })
      .sort((a, b) => {
        return (a.priority ?? 0) - (b.priority ?? 0);
      });

    if (sorts.length <= 0) {
      return data;
    }

    const result = data.slice().sort((a, b) => {
      for (const sort of sorts) {
        const column = columns.leafColumnMap[sort.name];

        const compare = column.sortable?.compare ?? (() => OrderType.EQUAL);

        const compareResult =
          sort.type === "asc" ? compare(a, b) : compare(b, a);
        if (compareResult === OrderType.EQUAL) {
          continue;
        }

        return compareResult;
      }

      return OrderType.EQUAL;
    });

    return result;
  };

  return {
    key,
    sort: currentSort,
    sortMap,
    operator: { set, next, remove, reset, clear, sort },
  };
}
