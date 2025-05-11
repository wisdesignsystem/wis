import { createContext, useContext, useRef, useState } from "react";
import useDidMount from "@/hooks/useDidMount";

const MountElementContext = createContext<HTMLElement | null>(null);

export function useSetMountElement() {
  const mountElementRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useDidMount(() => {
    setReady(true);
  });

  return {
    ref: mountElementRef,
    mountElement: ready ? mountElementRef.current : null,
  };
}

export function useGetMountElement(): HTMLElement {
  const mountElement = useContext(MountElementContext);
  return mountElement === null ? document.body : mountElement;
}

export default MountElementContext;
