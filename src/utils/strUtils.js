// 变量判断工具类
export default class VarUtils {

  /**
   * 判断字符串是否等于null
   * @param str 字符串
   * @returns {boolean}
   */
  static isNull(str) {
    return str == null;
  }

  /**
   * 判断字符串是否不等于null
   * @param str 字符串
   * @returns {boolean}
   */
  static isNotNull(str) {
    return !this.isNull(str);
  }

  /**
   * 判断字符串是否等于空
   * @param str 字符串
   * @returns {boolean}
   */
  static isEmpty(str) {
    return str == null || str === '';
  }

  /**
   * 判断字符串是否不等于空
   * @param str 字符串
   * @returns {boolean}
   */
  static isNotEmpty(str) {
    return !this.isEmpty(str);
  }

  /**
   * 判断字符串是不等于null, 等于空, length等于0
   * @param str 字符串
   * @returns {boolean}
   */
  static isBlank(str) {
    return str == null || str.length === 0 || str === '' || str === undefined;
  }

  /**
   * 判断字符串是不不等于null,不等于空, length不等于0
   * @param str
   * @returns {boolean}
   */
  static isNotBlank(str) {
    return !this.isBlank(str);
  }

  /**
   * 判断两个字符串是否相等
   * @param str1 字符串1
   * @param str2  字符串2
   * @returns {boolean}
   */
  static equals(str1, str2) {
    return str1 === str2;
  }
}

