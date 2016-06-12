import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function buildStyles() {
  return gulp.src(project.paths.styles)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(build.bundle());
};