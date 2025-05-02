import { useState } from "react";

interface Option {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
}

export default function useBooleanValue({
  value,
  defaultValue = false,
  onChange,
}: Option): [
  undefined | boolean,
  (value: boolean, emitChange?: boolean) => void,
] {
  const [currentValue, setCurrentValue] = useState<boolean | undefined>(
    defaultValue,
  );

  function setValue(value: boolean, emitChange?: boolean) {
    setCurrentValue(value);

    if (emitChange) {
      onChange?.(value);
    }
  }

  return [value === undefined ? currentValue : value, setValue];
}
