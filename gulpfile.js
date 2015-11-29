/*
* Dependencias
*/
var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');
/*
* Configuración de la tarea 'demo'
*/

gulp.task('server', ['imagenes', 'css', 'js'], function(){

});

gulp.task('imagenes', function () {

});
gulp.task('css', function () {

});
gulp.task('js', function () {
    gulp.src('js/source/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'));

    gulp.src('js/source/2.js')
    .pipe(concat('suma.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'));

    gulp.src('js/source/1.js')
    .pipe(concat('resta.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'));
});
