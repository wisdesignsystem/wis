import type { Ref } from "react";
import { useImperativeHandle, forwardRef } from "react";
import type { DrawerProps, DrawerRef } from "../drawer";

const Drawer = forwardRef(function Drawer(
  _props: DrawerProps,
  ref: Ref<DrawerRef>,
) {
  useImperativeHandle(ref, () => {
    return {
      show() {},
      hide() {},
    };
  });

  return null;
});

Drawer.displayName = "Drawer";

export default Drawer;
