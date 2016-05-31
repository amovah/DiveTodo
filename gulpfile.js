var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var clean = require('gulp-rimraf');
var less = require('gulp-less');

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('clean', function() {
  return gulp.src('build/*')
        .pipe(clean({ read: false, force: true }));
});

gulp.task('copy', ['clean'], function() {
  return [
    gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts/')),
    gulp.src(['src/index.html', 'src/database.json'])
    .pipe(gulp.dest('build/'))
  ];
});

gulp.task('babel', ['clean'], function() {
  return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/'));
});

gulp.task('less', function() {
  return gulp.src('src/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('pre-build', ['clean', 'less', 'babel', 'copy']);

gulp.task('default', ['pre-build']);

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['pre-build']);
});

gulp.task('build', ['lint'], function() {
  return gulp.start('pre-build');
});
