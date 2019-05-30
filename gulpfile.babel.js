'use strict'

// Dependencies
import autoprefixer from 'gulp-autoprefixer'
import babel from 'gulp-babel'
import cssnano from 'gulp-cssnano'
import concat from 'gulp-concat'
import cond from 'gulp-cond'
import del from 'del'
import eslint from 'gulp-eslint'
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import stylelint from 'gulp-stylelint'
import todo from 'gulp-todo'
import uglify from 'gulp-uglify'
import htmlmin from 'gulp-htmlmin';
import { argv } from 'yargs'

// If gulp was called in the terminal with the --prod flag, set the node
// environment to production
if (argv.prod) {
  process.env.NODE_ENV = 'production'
}
const PROD = process.env.NODE_ENV === 'production'

// Theme directory configuration
const themeDir = './'
const foundationDir = themeDir + 'node_modules/foundation-sites/dist/'
const paths = {
  js: `${themeDir}src/js/`,
  scss: `${themeDir}src/scss/`,
  img: `${themeDir}src/img/`,
  dist_js: `${themeDir}js/`,
  dist_css: `${themeDir}css/`,
  dist_img: `${themeDir}img/`,
}

// JS file configuration, key represents the compiled file name and value being
// an array represents the JS files that should be compiled for that file.
const js = {
  'components/foundation-core': [
    foundationDir + 'js/plugins/foundation.core.js',
  ],
  'components/foundation-offcanvas': [
    foundationDir + 'js/plugins/foundation.offcanvas.js',
  ],
  'components/foundation-media-query': [
    foundationDir + 'js/plugins/foundation.util.mediaQuery.js',
  ],
  'components/foundation-keyboard': [
    foundationDir + 'js/plugins/foundation.util.keyboard.js',
  ],
  'components/foundation-triggers': [
    foundationDir + 'js/plugins/foundation.util.triggers.js',
  ],
  'components/foundation-motion': [
    foundationDir + 'js/plugins/foundation.util.motion.js',
  ],
  'components/foundation-nest': [
    foundationDir + 'js/plugins/foundation.util.nest.js',
  ],
  'components/foundation-box': [
    foundationDir + 'js/plugins/foundation.util.box.js',
  ],
  'components/foundation-toggler': [
    foundationDir + 'js/plugins/foundation.toggler.js',
  ],
  'components/foundation-sticky': [
    foundationDir + 'js/plugins/foundation.sticky.js',
  ],
  'components/foundation-reveal': [
    foundationDir + 'js/plugins/foundation.reveal.js',
  ],
  'components/foundation-abide': [
    foundationDir + 'js/plugins/foundation.abide.js',
  ],
  'components/foundation-drilldown': [
    foundationDir + 'js/plugins/foundation.drilldown.js',
  ],
  'components/foundation-dropdownmenu': [
    foundationDir + 'js/plugins/foundation.dropdownMenu.js',
  ],
  'components/foundation-magellan': [
    foundationDir + 'js/plugins/foundation.magellan.js',
  ],
  'components/foundation-smoothscroll': [
    foundationDir + 'js/plugins/foundation.smoothScroll.js',
  ],
  'components/foundation-accordionmenu': [
    foundationDir + 'js/plugins/foundation.accordionMenu.js',
  ],
  foundation: [paths.js + 'foundation.js'],
}
/**
 * Deletes files & folders in the compilied CSS, JS & image directories.
 */
export const clean = () => {
  return del([
    paths.dist_js + '**',
    paths.dist_css + '**',
    paths.dist_img + '**',
    themeDir + 'index.html'
  ]);
}

/**
 * Lints CSS files.
 */
export const lintCSS = () => {
  return gulp.src(paths.scss + '**/*.scss').pipe(
    stylelint({
      syntax: 'scss',
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }],
    })
  )
}

/**
 * Compiles sass files to CSS.
 */
export const compileCSS = () => {
  return gulp
    .src([paths.scss + '**/*.scss'])
    .pipe(cond(!PROD, sourcemaps.init()))
    .pipe(
      sass({
        includePaths: [
          `${themeDir}node_modules/breakpoint-sass/stylesheets`,
          `${themeDir}node_modules/foundation-sites/scss`,
          `${themeDir}node_modules/hamburgers/_scss/hamburgers`,
          `${themeDir}node_modules/motion-ui/src`,
        ],
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(cond(!PROD, sourcemaps.write()))
    .pipe(cond(PROD, cssnano()))
    .pipe(gulp.dest(paths.dist_css))
}

/**
 * Watches scss files and triggers the compileCSS task on change.
 */
export const watchSass = () => {
  gulp.watch(paths.scss + '**/*.scss', gulp.series(lintCSS, compileCSS))
}

/**
 * Lints JS files.
 */
export const lintJS = () => {
  return gulp
    .src([paths.js + '**/*.js', `${themeDir}gulpfile.babel.js`])
    .pipe(eslint())
    .pipe(eslint.format())
}

/**
 * Compiles JS files.
 */
export const compileJS = done => {
  if (Object.keys(js).length) {
    for (let key in js) {
      gulp
        .src(js[key])
        .pipe(cond(!PROD, sourcemaps.init()))
        .pipe(babel())
        .pipe(cond(PROD, uglify()))
        .pipe(concat(key + '.js'))
        .pipe(cond(!PROD, sourcemaps.write()))
        .pipe(gulp.dest(paths.dist_js))
    }
  }

  done()
}

/**
 * Watches JS files and triggers the JS tasks on change.
 */
export const watchJS = () => {
  gulp.watch(paths.js + '**/*.js', gulp.series(lintJS, compileJS))
}

/**
 * Minifies images.
 */
export const minImages = () => {
  return gulp
    .src(paths.img + '**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist_img))
}

/**
 * Watches image files and triggers minImages on change.
 */
export const watchImages = () => {
  gulp.watch(paths.img + '**/*', minImages)
}

/**
 * Generates a TODO report.
 */
export const generateTODO = () => {
  return gulp
    .src([paths.scss + '**/*.scss', paths.js + '**/*.js'])
    .pipe(todo())
    .pipe(gulp.dest(themeDir))
}

/**
 * Compiles HTML files
 */
export const compileHTML = () => {
  return gulp
    .src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(themeDir));
}

/**
 * Watches HTML file changes
 */
export const watchHTML = () => {
  gulp.watch('src/index.html', compileHTML)
}

// Runs all build tasks
export const build = gulp.series(
  clean,
  lintJS,
  compileJS,
  minImages,
  lintCSS,
  compileCSS,
  generateTODO,
  compileHTML
)

// Runs all build tasks, then watches files for changes to trigger a recompile.
export const watch = gulp.series(
  clean,
  lintJS,
  compileJS,
  minImages,
  lintCSS,
  compileCSS,
  generateTODO,
  compileHTML,
  gulp.parallel(watchSass, watchJS, watchImages, watchHTML)
)
