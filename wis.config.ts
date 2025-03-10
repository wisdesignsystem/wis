import type { WisConfig } from "@wisdesign/wis-plugin";

const config: WisConfig = {
  libraryRegExp: /\/src\/packages/,

  exposes: {
    "./definitions": "./src/definitions",
    "./core": "./src/packages/core/index",
    "./grid": "./src/packages/grid/index",
    "./themes": {
      default: "./src/packages/themes/default/index",
      blue: "./src/packages/themes/blue/index",
    },
    "./box": {
      pc: "./src/packages/box/pc/index",
      mobile: "./src/packages/box/mobile/index",
    },
    "./actions": {
      pc: "./src/packages/actions/pc/index",
      mobile: "./src/packages/actions/mobile/index",
    },
    "./page": {
      pc: "./src/packages/page/pc/index",
      mobile: "./src/packages/page/mobile/index",
    },
    "./layout": {
      pc: "./src/packages/layout/pc/index",
      mobile: "./src/packages/layout/mobile/index",
    },
    "./module": {
      pc: "./src/packages/module/pc/index",
      mobile: "./src/packages/module/mobile/index",
    },
    "./shortcut": {
      pc: "./src/packages/shortcut/pc/index",
      mobile: "./src/packages/shortcut/mobile/index",
    },
    "./button": {
      pc: "./src/packages/button/pc/index",
      mobile: "./src/packages/button/mobile/index",
    },
    "./toggle": {
      pc: "./src/packages/toggle/pc/index",
      mobile: "./src/packages/toggle/mobile/index",
    },
    "./dropdown": {
      pc: "./src/packages/dropdown/pc/index",
      mobile: "./src/packages/dropdown/mobile/index",
    },
    "./contextMenu": {
      pc: "./src/packages/contextMenu/pc/index",
      mobile: "./src/packages/contextMenu/mobile/index",
    },
    "./tooltip": {
      pc: "./src/packages/tooltip/pc/index",
      mobile: "./src/packages/tooltip/mobile/index",
    },
    "./avatar": {
      pc: "./src/packages/avatar/pc/index",
      mobile: "./src/packages/avatar/mobile/index",
    },
  },
};

export default config;
