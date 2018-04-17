import gulp from 'gulp';
import copy from './build/copy.js';
import styles from './build/styles.js';
import scripts from './build/scripts.js';
import views from './build/views.js';
import svgs from './build/svgs.js';
import serve from './build/serve.js';
import watch from './build/watch.js';

const dev = gulp.series(copy, styles, scripts, svgs, views, serve, watch);
export default dev;
