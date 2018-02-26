module.exports = function(grunt) {
	grunt.initConfig ({
		jade: {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files: [ {
					cwd: "views",
					src: "**/*.jade",
					dest: "public",
					expand: true,
					ext: ".html"
				} ]
			}
		},

		sass: {
			dist: {
				files: {
					'public/css/my-app.css' : 'sass/style.scss'
				}
			}
		},

		concat: {
			options: {
				separator: '\r\n//*******************************************\r\n//\r\n//*******************************************\r\n',
			},
			dist: {
				// src: ['javascript/api-link.js', 
				// 'javascript/f7-init.js', 
				// 'javascript/log-register.js', 
				// 'javascript/page-init.js', 
				// 'javascript/page-home.js', 
				// 'javascript/page-profile.js', 
				// 'javascript/page-network.js', 
				// 'javascript/page-mypurchase.js', 
				// 'javascript/page-mysales.js', 
				// 'javascript/page-newproduct.js', 
				// 'javascript/page-mybrand.js', 
				// 'javascript/page-brandnewadd.js', 
				// 'javascript/page-wholesale.js', 
				// 'javascript/page-notifications.js', 
				// 'javascript/base-function.js'],
				src: ['javascript/api-link.js', 
				'javascript/f7-init.js', 
				'javascript/log-register.js', 
				'javascript/page-init.js', 
				'javascript/*.js',
				'javascript/base-function.js'],
				dest: 'public/js/allScripts.js',
			},
		},

		express: {
			options: {
			},
			dev:{
				options: {
					script: './app.js',
					background: true,
					// debug: true
				}
			}
		},

		watch: {
			source: {
				files: ['sass/**/*.scss','**/*.jade','javascript/*.js','gruntfile.js'],
				tasks: ['newer:sass','newer:jade','newer:concat'],
				options: {
					livereload: true,
				}
			},
		}

	});
		

	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.registerTask('default', ['express:dev','watch','jade','sass','concat']);
};