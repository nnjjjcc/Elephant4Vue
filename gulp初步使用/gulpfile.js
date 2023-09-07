const { src, dest } = require("gulp");
const browserSync = require("browser-sync");
//使用browserSync的watch,监听到文件改变后再刷新页面
const { watch } = require("browser-sync");
const { series } = require("gulp");
const less = require("gulp-less");
const fs = require("fs");
const path = require("path");
const autoprefixer = require("gulp-autoprefixer");
const reloadTask = () => {
  browserSync.reload();
};
//启动一个静态服务器并实现浏览器自动刷新功能。
const browserTask = () => {
  //初始化一个浏览器同步服务器。通过传递配置对象，我们配置了服务器的基本目录为当前目录
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html", series(reloadTask));
  //监听样式更新触发两个任务
  watch("src/style/*", series(lessTask, reloadTask));
};
//自动从 "src/style" 目录下选择所有的 LESS 文件，编译为 CSS，并进行浏览器前缀处理，最后将处理后的 CSS 文件输出到 "dist/style" 目录中。
const lessTask = () => {
  return src("src/style/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, //  是否美化属性值
      })
    )
    .pipe(dest("dist/style"));
};

const copy = () => {
  const distPath = "dist/";

  // 检查目标目录是否存在，如果不存在则创建
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }

  return src("src/*").pipe(dest(distPath));
};

exports.default = browserTask;
