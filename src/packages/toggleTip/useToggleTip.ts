import { useRef, useState, useEffect } from "react";
import { useShortcut } from "wis/shortcut";

import type { ToggleTipProps } from "./toggleTip";
import nextTick from "../../utils/nextTick";

export default function useToggleTip({ onOpen = () => {} }: ToggleTipProps) {
  const clearDocumentClick = useRef<() => void>();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [onTriggerKeyDown, onShortcut] = useShortcut();

  useEffect(() => {
    if (visible) {
      nextTick(() => {
        popperRef.current?.focus();
      });

      function documentClick(event: Event) {
        const target = event.target as HTMLElement;

        if (
          !triggerRef.current?.contains(target) &&
          !popperRef.current?.contains(target)
        ) {
          change(false);
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
  }, [visible]);

  onShortcut("Escape", () => {
    if (visible) {
      change(false);
      triggerRef.current?.focus();
    }
  });

  function onTriggerClick() {
    change(!visible);
  }

  function onPopperLeave() {
    change(false);
    triggerRef.current?.focus();
  }

  function change(value: boolean) {
    setVisible(value);
    onOpen(value);
  }

  return {
    open: visible,
    change,
    triggerRef,
    popperRef,
    onTriggerKeyDown,
    onTriggerClick,
    onPopperLeave,
  };
}
