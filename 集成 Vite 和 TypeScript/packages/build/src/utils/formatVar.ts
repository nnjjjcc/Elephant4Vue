// 变量名格式转换方法，如驼峰式，连字符式等
function splitVar(varName: string) {
  // 匹配连续两个或更多个大写字母，并且后面紧跟着大写字母后跟小写字母、数字或非字母数字字符。
  const reg = /[A-Z]{2,}(?=[A-Z][a-z]+|[0-9]|[^a-zA-Z0-9])|[A-Z]?[a-z]+|[A-Z]|[0-9]/g;
  return varName.match(reg) || <string[]>[];
}
/** 将变量名转换为肉串形式：@openxui/build -> openxui-build */
export function kebabCase(varName: string) {
  const nameArr = splitVar(varName);
  return nameArr.map((item) => item.toLowerCase()).join('-');
}

/** 将变量名转换为驼峰形式：@openxui/build -> openxuiBuild */
export function camelCase(varName: string, isFirstWordUpperCase = false) {
  const nameArr = splitVar(varName);
  return nameArr
    .map((item, index) => {
      if (index === 0 && !isFirstWordUpperCase) {
        return item.toLowerCase();
      }
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    })
    .join('');
}
