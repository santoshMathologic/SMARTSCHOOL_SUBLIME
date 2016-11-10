' use strict';
var gulp  = require("gulp");
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
//var runSequence = require('run-sequence').use(gulp);
var less = require("gulp-less");
//var sass = require("gulp-sass");
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var cssnano = require("gulp-cssnano");
var merge = require('merge-stream');
var del = require("del");
var cache = require('gulp-cache');
var useref = require('gulp-useref');



var inputDirectory = 'public_development';
var outputDirectory = 'public';

var inputDirectoryPath = inputDirectory  + '/';
var outputDirectoryPath = outputDirectory  + '/';



// Copy all ng js files
gulp.task('ng', function () {
    console.log("ng is updating");
    return gulp.src(inputDirectoryPath + 'ng/**/*')
        .pipe(gulp.dest(outputDirectoryPath + 'ng'));
});



gulp.task('stylesheets',function(){

	 var lessStream = gulp.src(inputDirectoryPath + 'less/**/*.less')
        .pipe(less())
        .pipe(concat('less-files.less'));

     
        

        var cssStream = gulp.src(inputDirectoryPath + 'stylesheets/**/*.css')
        .pipe(concat('css-files.css'));

         var mergedStream = merge(lessStream,cssStream)
        .pipe(concat('main.styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(outputDirectoryPath + 'stylesheets'));
		logMessage("task running Inside stylesheets");
      return mergedStream;	


      
});

gulp.task("assets",function(){

          var ass = gulp.src(inputDirectoryPath + 'assets/**/*').pipe(gulp.dest(outputDirectoryPath + 'assets'));
          return ass;


});

gulp.task("javascripts",function(){

    return gulp.src(inputDirectoryPath + 'javascripts/**/*')
    .pipe(concat('merge.all.js'))
    .pipe(gulp.dest(outputDirectoryPath + 'javascripts'));

          //var ass = gulp.src(inputDirectoryPath + 'javascripts/**/*').pipe(gulp.dest(outputDirectoryPath + 'javascripts'));
          //return ass;


});

// Clean up: clean {{outputPath}}
gulp.task('cleanDirecrory:' + outputDirectory, function () {
    return del.sync(outputDirectory);
});

// Clean everything
gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback);
});

// This is watch to update the browser in any file changes
gulp.task('watch', ['browserSync', 'stylesheets', 'ng', 'useref'], function () {


    gulp.watch(inputDirectoryPath + 'stylesheets/**/*.css', ['stylesheets']);
    gulp.watch(inputDirectoryPath + 'javascripts/**/*.js', ['javascripts']);
    gulp.watch(inputDirectoryPath + 'ng/**/*', ['ng', 'useref']);
    gulp.watch(inputDirectoryPath + '**/*.html', ['useref']);
    
    gulp.watch(inputDirectoryPath + '**/*', browserSync.reload);

});

gulp.task('bower_components', function () {
    console.log("bower is updating");
    return gulp.src(inputDirectoryPath + 'bower_components/**/*')
        .pipe(gulp.dest(outputDirectoryPath + 'bower_components'));
});

gulp.task('useref', function () {

    if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV === undefined) {
    	    return gulp.src(inputDirectoryPath + '*.html')
            .pipe(useref())
            .pipe(gulp.dest(outputDirectoryPath));
       
    }
    else {
         return gulp.src(outputDirectoryPath + '*.html')
            .pipe(useref())
            .pipe(gulp.dest(outputDirectoryPath));
       
    }

});

gulp.task('build', function (callback) {
    runSequence('cleanDirecrory:' + outputDirectory,
        ['stylesheets','useref', 'ng','bower_components','assets','javascripts'],
        callback
    );
});



gulp.task('default', function (callback) {
     logMessage("inside default");
      runSequence(['stylesheets', 'browserSync', 'watch','bower_components','assets','javascripts'],
        callback
    );
});

// Live-Sync on browser
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
         baseDir: outputDirectoryPath
        },
       
    });
});


function logMessage(message){
	gutil.log(message, gutil.colors.magenta('985'));
}

