import { useState } from "react";

export default function useOpen({
  open,
  defaultOpen = false,
}: { open?: boolean; defaultOpen?: boolean }): [
  undefined | boolean,
  (open: boolean) => void,
] {
  const [currentOpen, setOpen] = useState(defaultOpen);
  return [open === undefined ? currentOpen : open, setOpen];
}
