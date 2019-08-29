var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvar = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssImport, mixins, nested, cssvar, hexrgba, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});
