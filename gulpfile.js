
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function () {
	// place code for default task here
	console.log('gulp default task');
});

gulp.task('test', function () {
	return gulp.src(['mocha-test-runner/*.spec.js'], { read: false })
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
});