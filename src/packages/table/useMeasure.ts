import { useState, useRef } from "react";

interface Operator {
  set: (name: string, width: number) => void;
}

export interface Measure {
  measureMap: Record<string, number>;
  operator: Operator;
}
export function useMeasure(): Measure {
  const measureMap = useRef<Record<string, number>>({});
  const [_, setLastedMeasureName] = useState<string>();

  function set(name: string, width: number) {
    measureMap.current[name] = width;
    setLastedMeasureName(name);
  }

  return { measureMap: measureMap.current, operator: { set } };
}
