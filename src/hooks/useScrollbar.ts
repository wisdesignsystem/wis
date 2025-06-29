import { useRef } from "react";

function getScrollbarSize(): { x: number; y: number } {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  outer.style.left = "-9999px";
  outer.style.zIndex = "-9999";

  const inner = document.createElement("div");
  outer.appendChild(inner);

  document.body.appendChild(outer);

  const y = outer.offsetWidth - inner.offsetWidth;
  const x = outer.offsetHeight - inner.offsetHeight;

  document.body.removeChild(outer);

  return { x, y };
}

export default function useScrollbar() {
  const x = useRef(-1);
  const y = useRef(-1);

  if (x.current === -1 || y.current === -1) {
    const scrollbar = getScrollbarSize();
    x.current = scrollbar.x;
    y.current = scrollbar.y;
  }

  return {
    x: x.current === -1 ? 0 : x.current,
    y: y.current === -1 ? 0 : y.current,
  };
}
