import {getTargetValue} from '@/utils/directiveUtils'


/**
 * 在指定元素中检测滚动指令
 * @param el
 * @param binding
 */
export default function (el, binding) {
  let percent = binding.value.percent instanceof Number ? binding.value.percent : 1
  const SELECT_DOM = binding.value.body ? document : el.querySelector(binding.value.name)
  SELECT_DOM.addEventListener('scroll', function (e) {
    const scrollHeight = getTargetValue(e.target, "scrollHeight")
    const scrollTop = getTargetValue(e.target, "scrollTop")
    const clientHeight = getTargetValue(e.target, "clientHeight")
    // console.log('scrollHeight:', scrollHeight) // 获取元素内容高度(只读)
    // console.log('scrollTop:', scrollTop)
    // // 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
    // console.log('clientHeight:', clientHeight) // 读取元素的可见高度(只读)
    console.log('是否到达底部:', scrollHeight - scrollTop <= clientHeight)
    if (scrollHeight - scrollTop <= (clientHeight / percent)) {
      binding.value.handle()
    }
  })
}
