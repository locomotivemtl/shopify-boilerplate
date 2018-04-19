import gulp from 'gulp';
import paths from '../mconfig.json';
import gulpConcat from 'gulp-concat';

function concat() {
    return gulp.src([
    	`${paths.scripts.vendors}*.js`
    	])
      	.pipe(gulpConcat('vendors.js'))
      	.pipe(gulp.dest(`${paths.scripts.dest}`));
}

export default concat;