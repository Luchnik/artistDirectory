var gulp = require("gulp"),
	connect = require("gulp-connect");

gulp.task("connect", function() {
	connect.server({
		root : "webapp/",
	});
});

gulp.task("default", ["connect"]);