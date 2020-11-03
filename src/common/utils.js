// 高频动作防抖处理
export function debounce(fn, delay) {
  let timer = null 
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn.bind(this, args), delay)
  }
}