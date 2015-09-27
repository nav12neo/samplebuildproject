module.exports = function(grunt){

	grunt.initConfig({
		uglify: {
			js: {
			  files: {
				'release/js/main.js': ['js/site/main.js','js/site/page.js']
			  }
			}
		},		
		cssmin: {
		  options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		  },
		  target: {
			files: {
			  'release/css/main.css': ['css/site/page.css', 'css/site/main.css']
			}
		  }
		},
		watch: {
		  scripts: {
			files: ['js/**/*.js'],
			tasks: ['jshint','uglify:js']
		  },
		  css: {
			files: ['css/**/*.css'],
			tasks: ['cssmin']
		  }
		},
		jshint: {
			all: ['gruntfile.js', 'js/site/**/*.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('default',['uglify','cssmin','jshint','watch']);
};