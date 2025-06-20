import type { TableProps } from "./table";

export default function calcHeight(height: TableProps["height"]) {
  if (height === "auto") {
    return "100%";
  }

  if (typeof height === "number") {
    return `${height}px`;
  }

  return "auto";
}
