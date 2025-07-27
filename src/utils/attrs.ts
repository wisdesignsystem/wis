import { isBoolean } from "./is";

interface Attrs {
  [key: string]: string | number | boolean | undefined | null;
}
interface Option {
  ignoreNone?: boolean;
}
export default function attrs(data: Attrs, option?: Option) {
  const { ignoreNone = true } = option ?? {};

  return Object.keys(data).reduce((result, key) => {
    const value = data[key];

    if (ignoreNone && value === "none") {
      return result;
    }

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
