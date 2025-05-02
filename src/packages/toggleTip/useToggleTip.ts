import { useRef, useEffect } from "react";
import { useShortcut } from "wis/shortcut";

import type { ToggleTipProps } from "./toggleTip";
import nextTick from "../../utils/nextTick";
import useBooleanValue from "../../hooks/useBooleanValue";

export default function useToggleTip({
  open,
  defaultOpen,
  onOpen = () => {},
}: ToggleTipProps) {
  const clearDocumentClick = useRef<() => void>();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [currentOpen, setCurrentOpen] = useBooleanValue({
    value: open,
    defaultValue: defaultOpen,
    onChange: (value) => {
      if (value) {
        nextTick(() => {
          popperRef.current?.focus();
        }, true);
      } else {
        nextTick(() => {
          triggerRef.current?.focus();
        }, true);
      }

      onOpen(value);
    },
  });

  const [onTriggerKeyDown, onShortcut] = useShortcut();

  useEffect(() => {
    if (currentOpen) {
      function documentClick(event: Event) {
        const target = event.target as HTMLElement;

        if (
          !triggerRef.current?.contains(target) &&
          !popperRef.current?.contains(target)
        ) {
          setCurrentOpen(false, true);
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
      setCurrentOpen(false, true);
    }
  });

  function onTriggerClick() {
    setCurrentOpen(!currentOpen, true);
  }

  function onFocusEnded() {
    setCurrentOpen(false, true);
  }

  return {
    open: currentOpen,
    setOpen: setCurrentOpen,
    triggerRef,
    popperRef,
    onTriggerKeyDown,
    onTriggerClick,
    onFocusEnded,
  };
}
