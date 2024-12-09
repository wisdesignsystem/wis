import { createContext } from "react";

interface ContextValue {
  isNested?: boolean;
  variant?: "basic" | "ghost";
}

export default createContext<ContextValue>({});
