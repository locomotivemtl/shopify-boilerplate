import gulp from 'gulp';
import paths from '../mconfig.json';
import styles from './styles.js';
import scripts from './scripts.js';
import views from './views.js';
import svgs from './svgs.js';
import copy from './copy.js';
import { server } from './serve.js';

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
    gulp.watch(paths.svgs.src, svgs);
    gulp.watch(paths.src + '**/*.liquid', gulp.series(views, reload));
    gulp.watch(paths.src + 'assets/*', gulp.series(copy, reload));
}

function reload(done) {
    server.reload();
    done();
}

export default watch;
