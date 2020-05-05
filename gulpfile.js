let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
	return gulp.src('*.html')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function () {
	return gulp.src('src/js/*.js')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
		},
		notify: false
	});
});

gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'))
	gulp.watch('*.html', gulp.parallel('html'))
	gulp.watch('src/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'))

