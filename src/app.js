/**
 * 本文件用于注册全局回调勾子，如果你不需要这些勾子函数，可以删除本文件
 */

import './app.css'

/**
 * 应用渲染前的回调函数，可以控制应用的渲染
 * 使用场景一：延迟渲染
 * function render(oldRender) {
 *  setTimeout(() => {
 *    oldRender()
 *  }, 500)
 * }
 *
 * 使用场景二: 包裹其他Provider，比如国际化的Provider
 * function render(oldRender) {
 *  oldRender((children) => {
 *    return (
 *      <LocaleProvider>
 *        {children}
 *      </LocaleProvider>
 *    )
 *  })
 * }
 * @return
 */
export function render(oldRender) {
  // 注册渲染回调函数，在需要渲染时，一定要调用这个render
  // 否则应用无法渲染出来
  oldRender()
}

/**
 * 应用进入时触发
 */
export function enter() {
  // no action
}

/**
 * 应用离开时触发
 */
export function leave() {
  // no action
}
