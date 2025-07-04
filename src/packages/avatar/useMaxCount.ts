import { useLayoutEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import useObserverResize from "@/hooks/useObserverResize";

export default function useMaxCount<T extends HTMLElement>() {
  const [max, setMax] = useState(-1);
  const ref = useRef<T>(null);

  const rect = useObserverResize(ref as RefObject<T>);

  useLayoutEffect(() => {
    if (!rect) {
      return;
    }

    if (!ref.current) {
      setMax(0);
      return;
    }

    if (ref.current.children.length < 2) {
      setMax(0);
      return;
    }

    const groupRect = ref.current.getBoundingClientRect();

    const itemOne = ref.current.children[0];
    const itemTwo = ref.current.children[1];

    const itemOneRect = itemOne.getBoundingClientRect();
    const itemTwoRect = itemTwo.getBoundingClientRect();

    const gap = itemOneRect.right - itemTwoRect.left;

    const count = Math.floor(
      (groupRect.width - gap) / (itemOneRect.width - gap),
    );

    setMax(count);
  }, [rect]);

  return { ref, max };
}
