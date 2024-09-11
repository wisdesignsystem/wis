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
    './Button': { pc: '@/packages/button/pc/Button', mobile: '@/packages/button/mobile/Button' },
  },

  plugins: [require.resolve('@wisdesign/plugin-less')],

  // register remote entry file
  remoteEntry: './core',
}
