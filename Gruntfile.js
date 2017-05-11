module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//压缩JS
		uglify: {
			dynamic:{
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				files:[{
					expand: true,
					cwd: 'src',
					src: ['js/*.js'],
					dest: 'build',
					ext:'.min.js'
				}]
			}
		},
		//压缩CSS
		cssmin: {
			dynamic:{
				options: {
					report: 'gzip'
				},
				files:[{
					expand: true,
					cwd: 'src',
					src: ['css/*.css'],
					dest: 'build',
					ext:'.min.css'
				}]
			}
		},
		//压缩图片
		imagemin: {
			dynamic:{
				options: {
					optimizationLevel: 1
				},
				files:[{
					expand: true,
					cwd: 'src',
					src: ['images/*.png'],
					dest: 'build',
					ext:'.min.png'
				}]
			}
		}
	});
	
	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	// 默认被执行的任务列表。
	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['imagemin']);
	grunt.registerTask('default', ['cssmin']);
	
};
