
import Vue from "vue";


//电话号码
export function isPhone(s) {

  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)

}

/* 小写字母*/

export function validateLowerCase(str) {

  const reg = /^[a-z]+$/

  return reg.test(str)

}


/* 大写字母*/

export function validateUpperCase(str) {

  const reg = /^[A-Z]+$/

  return reg.test(str)

}


/* 大小写字母*/

export function validateAlphabets(str) {

  const reg = /^[A-Za-z]+$/

  return reg.test(str)

}

/*验证pad还是pc*/

export const validatePc = function () {

  const userAgentInfo = navigator.userAgent;

  const Agents = ["Android", "iPhone",

    "SymbianOS", "Windows Phone",

    "iPad", "iPod"

  ];

  let flag = true;

  for (let v = 0; v < Agents.length; v++) {

    if (userAgentInfo.indexOf(Agents[v]) > 0) {

      flag = false;

      break;

    }

  }

  return flag;

}

/**

 邮箱验证

 */

export function validateEmail(email) {

  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(email)

}


/**

 * 判断身份证号码

 */

export function cardID(code) {

  let list = [];

  let result = true;

  let msg = '';

  let city = {

    11: "北京",

    12: "天津",

    13: "河北",

    14: "山西",

    15: "内蒙古",

    21: "辽宁",

    22: "吉林",

    23: "黑龙江 ",

    31: "上海",

    32: "江苏",

    33: "浙江",

    34: "安徽",

    35: "福建",

    36: "江西",

    37: "山东",

    41: "河南",

    42: "湖北 ",

    43: "湖南",

    44: "广东",

    45: "广西",

    46: "海南",

    50: "重庆",

    51: "四川",

    52: "贵州",

    53: "云南",

    54: "西藏 ",

    61: "陕西",

    62: "甘肃",

    63: "青海",

    64: "宁夏",

    65: "新疆",

    71: "台湾",

    81: "香港",

    82: "澳门",

    91: "国外 "

  };

  if (!validatenull(code)) {

    if (code.length === 18) {

      if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {

        msg = "证件号码格式错误";

      } else if (!city[code.substr(0, 2)]) {

        msg = "地址编码错误";

      } else {

//18位身份证需要验证最后一位校验位

        code = code.split('');

//∑(ai×Wi)(mod 11)

//加权因子

        let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

//校验位

        let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x'];

        let sum = 0;

        let ai = 0;

        let wi = 0;

        for (let i = 0; i < 17; i++) {

          ai = code[i];

          wi = factor[i];

          sum += ai * wi;

        }

        if (parity[sum % 11] != code[17]) {

          msg = "证件号码校验位错误";

        } else {

          result = false;

        }


      }

    } else {

      msg = "证件号码长度不为18位";

    }


  } else {

    msg = "证件号码不能为空";

  }

  list.push(result);

  list.push(msg);

  return list;

}

/**

 * 判断手机号码是否正确

 */

export function validateMobile(phone) {

  let list = [];

  let result = true;

  let msg = '';

  let isPhone = /^0\d{2,3}-?\d{7,8}$/;

  if (!validatenull(phone)) {

    if (phone.length === 11) {

      if (isPhone.test(phone)) {

        msg = '手机号码格式不正确';

      } else {

        result = false;

      }

    } else {

      msg = '手机号码长度不为11位';

    }

  } else {

    msg = '手机号码不能为空';

  }

  list.push(result);

  list.push(msg);

  return list;

}

/**

 * 判断姓名是否正确

 */

export function validateNme(name) {

  let regName = /^[\u4e00-\u9fa5]{2,4}$/;

  return regName.test(name);
}

/**

 * 判断是否为整数

 */

export function validateNum(num, type) {

  let regName = /[^\d.]/g;

  if (type === 1) {

    if (!regName.test(num)) return false;

  } else if (type === 2) {

    regName = /[^\d]/g;

    if (!regName.test(num)) return false;

  }

  return true;

}

/**

 * 判断是否为小数

 */

export function validateNumOrd(num, type) {

  let regName = /[^\d.]/g;

  if (type === 1) {

    if (!regName.test(num)) return false;

  } else if (type === 2) {

    regName = /[^\d.]/g;

    if (!regName.test(num)) return false;

  }

  return true;

}

/**

 * 判断是否为空

 */

export function validatenull(val) {

  if (typeof val == 'boolean') {

    return false;

  }

  if (typeof val == 'number') {

    return false;

  }

  if (val instanceof Array) {

    return val.length == 0;

  } else if (val instanceof Object) {

    if (JSON.stringify(val) === '{}') return true;

  } else {

    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true;

    return false;

  }

  return false;

}

// --------------------------------------------------------------------------------------------------------
//   功能项
// --------------------------------------------------------------------------------------------------------
//   一、list数据结构转tree父子结构

export const translateDataToTree = (data) => {

  let parents = data.filter(
    value => value.parentId == "undefined" || value.parentId == 0
  );

  let children = data.filter(
    value => value.parentId !== "undefined" && value.parentId != 0
  );

  let translator = (parents, children) => {

    parents.forEach(parent => {

      children.forEach((current, index) => {

        if (current.parentId === parent.deptId) {

          let temp = JSON.parse(JSON.stringify(children));

          temp.splice(index, 1);

          translator([current], temp);

          typeof parent.children !== "undefined" ?

            parent.children.push(current) :

            // parent.push(current) :

            (parent.children = [current]);

        }

      });

    });

  };

  translator(parents, children);

  return parents;

}

// 二、tree数据结构转list数据结构

export default function treeToArray(data, children = 'children') {

  let tmp = []

  data.forEach((item, index) => {

    Vue.set(item, '_index', index)

    tmp.push(item)

    if (item[children] && item[children].length > 0) {

      const res = treeToArray(item[children], children)

      tmp = tmp.concat(res)

    }

  })

  return tmp

}

// 三、对象深拷贝
//
// 方案一：

export const deepClone = data => {

  let type = getObjType(data);

  let obj;

  if (type === 'array') {

    obj = [];

  } else if (type === 'object') {

    obj = {};

  } else {

//不再具有下一层次

    return data;

  }

  if (type === 'array') {

    for (let i = 0, len = data.length; i < len; i++) {

      obj.push(deepClone(data[i]));

    }

  } else if (type === 'object') {

    for (let key in data) {

      obj[key] = deepClone(data[key]);

    }

  }

  return obj;

};

// 方案二：

export function deepClone(obj) {
  let _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
  return objClone
}

// 四、深度递归搜索

/**
 * @param {Array} arr 你要搜索的数组
 * @param {Function} condition 回调函数，必须返回谓词，判断是否找到了。会传入(item, index, level)三个参数
 * @param {String} children 子数组的key
 */
const deepFind = (arr, condition, children) => {
  // 即将返回的数组
  let main = []

  // 用try方案方便直接中止所有递归的程序
  try {
    // 开始轮询
    (function poll(arr, level) {
      // 如果传入非数组
      if (!Array.isArray(arr)) return

      // 遍历数组
      for (let i = 0; i < arr.length; i++) {
        // 获取当前项
        const item = arr[i]

        // 先占位预设值
        main[level] = item

        // 检验是否已经找到了
        const isFind = condition && condition(item, i, level) || false

        // 如果已经找到了
        if (isFind) {
          // 直接抛出错误中断所有轮询
          throw Error

          // 如果存在children，那么深入递归
        } else if (children && item[children] && item[children].length) {
          poll(item[children], level + 1)

          // 如果是最后一个且没有找到值，那么通过修改数组长度来删除当前项
        } else if (i === arr.length - 1) {
          // 删除占位预设值
          main.length = main.length - 1
        }
      }
    })(arr, 0)
    // 使用try/catch是为了中止所有轮询中的任务
  } catch (err) {
  }

  // 返回最终数组
  return main
}

let myarr = deepFind(fuck, (item, index, level) => item.value === 63, 'children')
console.log(20181115092957, myarr)  // [{…}, {…}, {…}]
console.log(20181115092957, myarr.map(_ => _.value)) // [32, 58, 63]

// 五、浏览器全屏、退出全屏

/**

 * 浏览器全屏

 */

export const reqFullScreen = () => {

  if (document.documentElement.requestFullScreen) {

    document.documentElement.requestFullScreen();

  } else if (document.documentElement.webkitRequestFullScreen) {

    document.documentElement.webkitRequestFullScreen();

  } else if (document.documentElement.mozRequestFullScreen) {

    document.documentElement.mozRequestFullScreen();

  }

};

/**

 * 浏览器退出全屏

 */

export const exitFullScreen = () => {

  if (document.documentElement.requestFullScreen) {

    document.exitFullScreen();

  } else if (document.documentElement.webkitRequestFullScreen) {

    document.webkitCancelFullScreen();

  } else if (document.documentElement.mozRequestFullScreen) {

    document.mozCancelFullScreen();

  }

};

// 六、根据数据字典的value查找对应的index

export const findArray = (dic, value) => {

  for (let i = 0; i < dic.length; i++) {

    if (dic[i].value === value) {

      return i;

    }

  }

  return -1;

};
