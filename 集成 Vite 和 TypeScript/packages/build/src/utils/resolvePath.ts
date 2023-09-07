// 路径的处理方法
import { relative, resolve, sep } from 'node:path';
/** 抹平 Win 与 Linux 系统路径分隔符之间的差异 */
function normalizePath(path: string) {
  if (sep === '/') {
    return path;
  }
  // RegExp 构造函数用于创建一个正则表达式对象，将路径中的分隔符转义，并使用 g 标志表示全局替换。
  return path.replace(new RegExp(`\\${sep}`, 'g'), '/');
}

/** 给予一个基础路径，获取到一个以此为基准计算绝对路径的方法 */
export function usePathAbs(basePath: string) {
  // 提供的路径参数解析为绝对路径。
  return (...paths: string[]) => normalizePath(resolve(basePath, ...paths));
}
/** 获取相对于当前脚本执行位置的绝对路径 */
export const absCwd = usePathAbs(process.cwd());
/** 给予一个基础路径，获取到一个以此为基准计算相对路径的方法 */
export function usePathRel(basePath: string) {
  return (path: string, ignoreLocalSignal: boolean = true) => {
    const result = normalizePath(relative(basePath, path));
    if (result.slice(0, 2) === '..') {
      return result;
    }
    return ignoreLocalSignal ? result : `./${result}`;
  };
}
/** 获取相对于当前脚本执行位置的相对路径 */
export const relCwd = usePathRel(process.cwd());
