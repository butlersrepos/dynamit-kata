var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var del = require( 'del' );

var paths = {
	lessFiles: './less/*.less',
	cssFiles : './css/*.css',
	cssDir   : './css/'
};

gulp.task( 'clearCss', function() {
	return del( paths.cssFiles );
} );

gulp.task( 'lessify', ['clearCss'], function() {
	return gulp.src( paths.lessFiles )
		.pipe( less() )
		.pipe( gulp.dest( paths.cssDir ) );
} );

gulp.task( 'watchLess', function() {
	gulp.watch( paths.lessFiles, ['lessify'] );
} );

gulp.task( 'default', ['watchLess'] );