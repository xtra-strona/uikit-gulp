var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Save a reference to the `reload` method

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

// Watch scss AND html files, doing different things with each.
gulp.task('watch', ['sass'], function() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./",
        },
        browser: "chrome"
        // browser: "firefox"
    })

    gulp.watch("*.html").on("change", reload);
    gulp.watch("css/*.css").on("change", reload);
    gulp.watch('./sass/**/*.scss', ['sass']);
});
