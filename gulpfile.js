const gulp = require("gulp");
const pug = require('gulp-pug');
const gulpLoadPlugins = require("gulp-load-plugins");
const plugins = gulpLoadPlugins();
const webpackStream = require("webpack-stream");
const gulpUtil = require("gulp-util");
const gulpCleanCSS = require("gulp-clean-css");
const del = require("del");
const browserSync = require("browser-sync");

const isDevelopment = gulpUtil.env.mode === "development" ? true : false;

gulp.task("clean", function () {
  return del("./dist");
});

gulp.task("scripts", function () {
  return gulp
    .src("./js/index.js")
    .pipe(
      webpackStream({
        output: {
          filename: "scripts.js",
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          targets: {
                            chrome: "58",
                            ie: "11",
                          },
                        },
                      ],
                    ],
                  },
                },
              ],
            },
          ],
        },
        mode: isDevelopment ? "development" : "production",
        devtool: isDevelopment ? "source-map" : "",
      })
    )
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("styles", function () {
  return gulp
    .src("./css/styles.less")
    .pipe(plugins.if(isDevelopment, plugins.sourcemaps.init()))
    .pipe(plugins.less())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.if(!isDevelopment, gulpCleanCSS()))
    .pipe(plugins.if(isDevelopment, plugins.sourcemaps.write()))
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp
    .src("./fonts/*.*")
    .pipe(gulp.dest("./dist/fonts/"))
    .pipe(browserSync.stream());
});

gulp.task("jquery", function () {
  return gulp
    .src("./jquery/*.*")
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("images", function () {
  return gulp
    .src("./images/*.*")
    .pipe(plugins.if(!isDevelopment, plugins.imagemin()))
    .pipe(gulp.dest("./dist/images/"))
    .pipe(browserSync.stream());
});

gulp.task("blocks images", function () {
  return gulp
    .src("./css/**/*.{jpg,png,svg}")
    .pipe(plugins.if(!isDevelopment, plugins.imagemin()))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());
});

gulp.task("html", function () {
  return gulp
    .src("./pug/pages/index.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./dist",
  });
  gulp.watch("./css/**/*.less", gulp.series("styles"));
  gulp.watch("./js/**/*.js", gulp.series("scripts"));
  gulp.watch("./**/*.pug", gulp.series("html"));
  gulp.watch("./images/*.{jpg,png,svg}", gulp.series("images"));
  gulp.watch("./css/**/*.{jpg,png,svg}", gulp.series("blocks images"));
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("html", "fonts", "jquery","scripts", "styles", "images", "blocks images")
  )
);
gulp.task("default", gulp.series("build", "watch"));
