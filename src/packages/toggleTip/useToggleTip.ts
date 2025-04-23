import { useRef, useEffect } from "react";
import { useShortcut } from "wis/shortcut";

import type { ToggleTipProps } from "./toggleTip";
import nextTick from "../../utils/nextTick";
import useOpen from "./useOpen";

export default function useToggleTip({
  open,
  defaultOpen,
  onOpen = () => {},
}: ToggleTipProps) {
  const clearDocumentClick = useRef<() => void>();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [currentOpen, setCurrentOpen] = useOpen({ open, defaultOpen });

  const [onTriggerKeyDown, onShortcut] = useShortcut();

  useEffect(() => {
    if (currentOpen) {
      nextTick(() => {
        popperRef.current?.focus();
      });

      function documentClick(event: Event) {
        const target = event.target as HTMLElement;

        if (
          !triggerRef.current?.contains(target) &&
          !popperRef.current?.contains(target)
        ) {
          setOpen(false);
        }
      }

      document.addEventListener("click", documentClick);
      clearDocumentClick.current = () => {
        document.removeEventListener("click", documentClick);
      };
    } else {
      if (clearDocumentClick.current) {
        clearDocumentClick.current();
        clearDocumentClick.current = undefined;
      }
    }
  }, [currentOpen]);

  onShortcut("Escape", () => {
    if (currentOpen) {
      setOpen(false);
      triggerRef.current?.focus();
    }
  });

  function onTriggerClick() {
    setOpen(!currentOpen);
  }

  function onPopperLeave() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function setOpen(value: boolean) {
    setCurrentOpen(value);
    onOpen(value);
  }

  return {
    open: currentOpen,
    setOpen,
    triggerRef,
    popperRef,
    onTriggerKeyDown,
    onTriggerClick,
    onPopperLeave,
  };
}
