import gulp from 'gulp';
import concat from 'gulp-concat';
import paths from '../mconfig.json';

function concat() {
    return gulp
        .src(`${paths.scripts.vendors.src}*.js`)
        .pipe(concat(`${paths.scripts.vendors.main}.js`))
        .pipe(gulp.dest(paths.scripts.dest));
}

export default concat;
