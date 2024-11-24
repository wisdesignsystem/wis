import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export default {
  // project type
  mode: 'library',

  // set alias
  alias: {
    '@': 'src',
  },

  // wis will default to exclude the compilation of all node_modules
  // If some packages need to be compiled, please add the additional package names that need to be compiled here
  extraBabelCompileNodeModules: [],

  // export remote modules
  exposes: {
    './core': '@/packages/core/index',
    './blank': '@/packages/blank/index',
    './grid': '@/packages/grid/index',
    './locales': { 'en-US': '@/locales/en-US/index', 'zh-CN': '@/locales/zh-CN/index' },
    './themes': { default: '@/themes/default/index.css', blue: '@/themes/blue/index.css' },
    './box': { pc: '@/packages/box/pc/index', mobile: '@/packages/box/mobile/index' },
    './actions': { pc: '@/packages/actions/pc/index', mobile: '@/packages/actions/mobile/index' },
    './page': { pc: '@/packages/page/pc/index', mobile: '@/packages/page/mobile/index' },
    './layout': { pc: '@/packages/layout/pc/index', mobile: '@/packages/layout/mobile/index' },
    './module': { pc: '@/packages/module/pc/index', mobile: '@/packages/module/mobile/index' },
    './shortcut': { pc: '@/packages/shortcut/pc/index', mobile: '@/packages/shortcut/mobile/index' },
    './button': { pc: '@/packages/button/pc/index', mobile: '@/packages/button/mobile/index' },
    './toggle': {
      pc: '@/packages/toggle/pc/index',
      mobile: '@/packages/toggle/mobile/index',
    },
    './dropdown': {
      pc: '@/packages/dropdown/pc/index',
      mobile: '@/packages/dropdown/mobile/index',
    },
    './contextMenu': {
      pc: '@/packages/contextMenu/pc/index',
      mobile: '@/packages/contextMenu/mobile/index',
    },
    './tooltip': {
      pc: '@/packages/tooltip/pc/index',
      mobile: '@/packages/tooltip/mobile/index',
    },
    './avatar': {
      pc: '@/packages/avatar/pc/index',
      mobile: '@/packages/avatar/mobile/index',
    },
  },

  plugins: [require.resolve('@wisdesign/plugin-javascript-docgen')],

  // register remote entry file
  remoteEntry: './core',
}
