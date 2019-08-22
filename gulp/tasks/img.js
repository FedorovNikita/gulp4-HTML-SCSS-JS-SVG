module.exports = function() {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,svg}')
            .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,svg}')
            .pipe($.imagemin([
                $.mozjpeg({
                quality: 65
                })
            ]))
            .pipe($.gulp.dest('build/static/img'));
    });
}