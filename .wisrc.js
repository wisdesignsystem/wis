import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export default {
  // 项目类型
  mode: 'library',

  // 设置别名
  alias: {
    '@': 'src',
  },

  // wis默认会排除所有node_modules编译
  // 如果需要编译部分包，请在这里添加额外的需要编译的包名
  extraBabelCompileNodeModules: [],

  // 项目导出的共享资源
  exposes: {
    './style': '@/packages/style/index.js',
    './Icon': '@/packages/icon/index.js',
    './Button': { pc: '@/packages/button/pc/Button', mobile: '@/packages/button/mobile/Button' },
  },

  plugins: [require.resolve('@wisdesign/plugin-less')],

  remoteEntry: './style',
}
