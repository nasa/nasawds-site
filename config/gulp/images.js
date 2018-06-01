var gulp  = require('gulp');
var dutil = require('./doc-util');
var task  = 'images';

gulp.task('copy-doc-images', function (done) {

  dutil.logMessage(task, 'Copying images from img/');

  var stream = gulp.src('./img/**/*')
    .pipe(gulp.dest('assets/img'));

  return stream;

});

gulp.task('copy-nasawds-images', function (done) {

  dutil.logMessage(task, 'Copying images from nasawds');

  var stream = gulp.src('./node_modules/nasawds/src/img/**/*')
    .pipe(gulp.dest('assets/img'));

  return stream;

});

gulp.task(task,
  gulp.series(
    function(done) {
      dutil.logMessage(task, 'Copying images Sass');
      done();
    },
    gulp.parallel(
      'copy-doc-images',
      'copy-uswds-images'
    ),
  )
);
