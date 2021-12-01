import VarUtils from '@/utils/strUtils'
// 获取指定元素的值
export function getTargetValue(e,binding){
  binding = !VarUtils.isBlank(binding) ? binding: "scrollTop"
  let value
  if (e && e.documentElement[binding]) {
    value = e.documentElement[binding]
  } else if (document.body) {
    value = document.body[binding]
  }
  return value
}
