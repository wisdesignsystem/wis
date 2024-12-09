import path from "node:path";
import docgen from "react-docgen-typescript";

const options = {
  savePropValueAsString: false,
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: (prop) => {
    if (prop?.parent?.fileName?.indexOf("node_modules") !== -1) {
      // 过滤第三方插件的 props
      return false;
    }
    return true;
  },
};

const docs = docgen.parse(
  path.resolve("./src/packages/avatar/pc/index.ts"),
  options,
);
const jsonContent = JSON.stringify(docs);

console.info(jsonContent);
