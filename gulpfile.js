'use strict'

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

var projectTheme = 'skin/frontend/theme/default/';
var themePaths = {
    css: projectTheme + 'css',
    js: projectTheme + 'js',
    images: projectTheme + 'images'
};
var sourcePaths = {
    sass: projectTheme + 'source/scss/**/*.scss',
    js : projectTheme + 'source/js/**/*.js',
    images: projectTheme + 'source/images/*',
    path : projectTheme + 'source/**/*'
};

gulp.task('default', ['compileSass', 'compressImages', 'compressJS']);

gulp.task('compileSass', function () {
    return gulp.src(sourcePaths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./source-maps'))
        .pipe(gulp.dest(themePaths.css))
        .pipe(livereload());
});

gulp.task('compressImages', function() {
    return gulp.src(sourcePaths.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest(themePaths.images))
        .pipe(livereload());
});

gulp.task('compressJS', function() {
    return gulp.src(sourcePaths.js)
        .pipe(uglify())
        .pipe(gulp.dest(themePaths.js))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gutil.log("starting to watch " + sourcePaths.path);
    livereload.listen();
    gulp.watch(sourcePaths.path, ['default']);
});