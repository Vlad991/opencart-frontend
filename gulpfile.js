var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');

function cssStyle(done) {
    gulp.src('./sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
    done();
}

function watchSass() {
    gulp.watch('./sass/**/*', cssStyle);
}

function watchFiles() {
    gulp.watch('./sass/**/*', cssStyle);
    gulp.watch('./**/*.html', browserReload);
    gulp.watch('./**/*.php', browserReload);
    gulp.watch('./**/*.js', browserReload);
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
    done();
}

function browserReload(done) {
    cache.clearAll();
    browserSync.reload();
    done();
}

gulp.task('default', gulp.parallel(watchFiles));