
// 获取滚动元素的 scrollTop
export function getScrollTop(e){
  let scrollTop = 0
  if (e && e.documentElement.scrollTop) {
    scrollTop = e.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}
