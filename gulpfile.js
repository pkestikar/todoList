const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('buildSass', function() {
    return gulp.src('app/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on('error', sass.logError)
        )
        .pipe(gulp.dest('dist/'))
});

gulp.task('watchSass', function() {
    gulp.watch('app/**/*.scss', gulp.series('buildSass'));
});

