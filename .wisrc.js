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
    './Button': { pc: '@/packages/button/pc/Button', mobile: '@/packages/button/mobile/Button' },
  },

  plugins: ['@wisdesign/plugin-less'],
}
