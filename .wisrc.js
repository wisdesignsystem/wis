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
    './Grid': '@/packages/grid/index',
    './Actions': { pc: '@/packages/actions/pc/Actions', mobile: '@/packages/actions/mobile/Actions' },
    './Page': { pc: '@/packages/page/pc/Page', mobile: '@/packages/page/mobile/Page' },
    './Layout': { pc: '@/packages/layout/pc/index', mobile: '@/packages/layout/mobile/index' },
    './Module': { pc: '@/packages/module/pc/Module', mobile: '@/packages/module/mobile/Module' },
    './Shortcut': { pc: '@/packages/shortcut/pc/Shortcut', mobile: '@/packages/shortcut/mobile/Shortcut' },
    './Button': { pc: '@/packages/button/pc/Button', mobile: '@/packages/button/mobile/Button' },
    './Toggle': {
      pc: '@/packages/toggle/pc/Toggle',
      mobile: '@/packages/toggle/mobile/Toggle',
    },
    './Dropdown': {
      pc: '@/packages/dropdown/pc/Dropdown',
      mobile: '@/packages/dropdown/mobile/Dropdown',
    },
    './ContextMenu': {
      pc: '@/packages/contextMenu/pc/ContextMenu',
      mobile: '@/packages/contextMenu/mobile/ContextMenu',
    },
  },

  plugins: [],

  // register remote entry file
  remoteEntry: './core',
}
