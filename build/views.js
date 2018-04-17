import gulp from 'gulp';
import liquify from 'gulp-liquify';
import rename from 'gulp-rename';
import paths from '../mconfig.js';
import error from './error.js';
import locales from '../src/locales/en.default.json';

const filters = {
    asset_url: function(val) {
        return 'assets/' + val;
    },
    img_url: function(val) {
        return 'assets/' + val;
    },
    t: function(val) {
        return val;
    },
    handle: function(val) {
        return val;
    }
}

function views() {
    return gulp
        .src(paths.views.src + '**/*.liquid')
        .pipe(liquify(locales, {
            base: paths.views.partials,
            filters: filters
        }))
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest(paths.dest));
}

export default views;
