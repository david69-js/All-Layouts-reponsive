'use strict'
const gulp = require('gulp'),
    sass = require('gulp-sass');
    
    gulp.task('sass', ()=>{
        return gulp.src('./scss/style.scss')
            .pipe(sass({
                 }).on('error', sass.logError))
            .pipe(gulp.dest('./css'))
    });

    
    gulp.task('default', () =>{
        return gulp.watch('./scss/style.scss', gulp.series(['sass']));
     })

