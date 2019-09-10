import path from "path";

export const dist = "../dist"; // 打包目录
export const build = "../build"; // 打包目录
export const src = "../src"; // 源码目录
export const resolve = function(url) {
  return path.resolve(__dirname, url);
};
export const PACKAGE_NAME = 'xxxxx';                    // 打包生成的文件名, 如mining.cegn.cn
