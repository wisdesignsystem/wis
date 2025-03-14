import type { WisConfig } from "@wisdesign/wis-plugin";

const config: WisConfig = {
  name: "wis",

  libraryRegExp: /\/src\/packages/,

  exposes: {
    "./core": "./src/packages/core/index",
    "./definitions": "./src/definitions",
    "./theme": {
      default: "./src/packages/themes/tokens/theme/blue/index",
      blue: "./src/packages/themes/tokens/theme/orange/index",
    },
    "./gray": {
      default: "./src/packages/themes/tokens/gray/black/index",
      blue: "./src/packages/themes/tokens/gray/blue/index",
    },
    "./grid": "./src/packages/grid/index",
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
