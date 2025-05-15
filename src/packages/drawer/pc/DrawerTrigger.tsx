import { forwardRef, useEffect, useRef } from "react";
import type { Ref } from "react";
import nextTick from "@/utils/nextTick";

import type { DrawerTriggerProps } from "../drawer";

const DrawerTrigger = forwardRef(
  (props: DrawerTriggerProps, ref: Ref<HTMLDivElement>) => {
    const activeElementRef = useRef<Element>();

    // @ts-ignore
    const open = props["data-state"] === "open";

    useEffect(() => {
      if (open) {
        if (document.activeElement) {
          activeElementRef.current = document.activeElement;
        }
      } else {
        if (activeElementRef.current) {
          nextTick(() => {
            // @ts-ignore
            activeElementRef.current.focus?.();
            activeElementRef.current = undefined;
          }, true);
        }
      }
    }, [open]);

    return <div ref={ref} style={{ display: "none" }} />;
  },
);

DrawerTrigger.displayName = "DrawerTrigger";

export default DrawerTrigger;
