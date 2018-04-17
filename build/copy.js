import gulp from 'gulp';
import paths from '../mconfig.js';
import error from './error.js';

function copy() {
    return gulp
        .src([`${paths.src}**/*`, `!${paths.styles.src}**/*`, `!${paths.scripts.src}**/*`, `!${paths.svgs.src}**/*`])
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(gulp.dest(paths.dest));
}

export default copy;
