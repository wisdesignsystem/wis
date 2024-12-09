import { createContext } from "react";

type Value = string | string[] | undefined;

interface ContextValue {
  contextValue: { [key: string]: Value };
  setContextValue: (value: { [key: string]: Value }) => void;
  contextType?: "DropdownButton";
}

export default createContext<ContextValue>({
  contextValue: {},
  setContextValue: () => {},
});
