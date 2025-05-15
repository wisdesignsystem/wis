import { useEffect, useRef } from "react";

import nextTick from "@/utils/nextTick";

export default function useGlobalScrollLock(
  mountElement: HTMLElement,
  open?: boolean,
) {
  const isChanged = useRef(false);

  function unlockBody() {
    const lockString = document.body.getAttribute("data-scroll-locked");
    if (!lockString) {
      return;
    }

    isChanged.current = true;

    let lockNumber = Number(lockString);
    lockNumber--;

    if (lockNumber > 0) {
      document.body.setAttribute("data-scroll-locked", String(lockNumber));
    } else {
      document.body.removeAttribute("data-scroll-locked");
      document.body.style.removeProperty("pointer-events");
    }
  }

  function resetLockBody() {
    if (isChanged.current === false) {
      return;
    }

    isChanged.current = false;
    const lockString = document.body.getAttribute("data-scroll-locked");
    let lockNumber = Number(lockString) || 0;
    lockNumber++;

    document.body.setAttribute("data-scroll-locked", String(lockNumber));
    document.body.style.setProperty("pointer-events", "none");
  }

  useEffect(() => {
    if (mountElement === document.body) {
      return;
    }

    if (open) {
      nextTick(() => {
        unlockBody();
      });
    } else {
      resetLockBody();
    }
  }, [open]);
}
