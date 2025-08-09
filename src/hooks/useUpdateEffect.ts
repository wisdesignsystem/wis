import { useEffect, useRef } from "react";
import type { EffectCallback, DependencyList } from "react";

function useUpdateEffect(
  callback: EffectCallback,
  dependencyList?: DependencyList,
) {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      isFirstRender.current = false;
      return callback();
    }

    return;
  }, dependencyList);
}

export default useUpdateEffect;
