import { isBoolean } from "./is";

interface Attrs {
  [key: string]: string | number | boolean | undefined | null;
}

export default function attrs(data: Attrs) {
  return Object.keys(data).reduce((result, key) => {
    const value = data[key];

    if (!isBoolean(value)) {
      result[key] = value;
      return result;
    }

    if (value) {
      result[key] = "";
    }

    return result;
  }, {} as Attrs);
}
