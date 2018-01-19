'use strict';

var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    watch = require ('gulp-watch'),
    browserSync = require ('browser-sync').create();

gulp.task('sassCompiler', function(){
    gulp.src("./scss/*.scss")
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(gulp.dest("./css"));
});

gulp.task('watch', function(){
    gulp.watch('./scss/*.scss', ['sassCompiler']).on('change', browserSync.reload);
});

gulp.task('testPage', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sassCompiler', 'watch', 'testPage']);