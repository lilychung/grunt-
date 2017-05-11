Grunt 前端自动化工具

配置
1、下载并安装node.js（https://nodejs.org/）
2、安装grunt （命令：npm install -g grunt-cli）

实例
1、新建项目（文件夹）


2、新建2个文件（package.json、gruntfile.js）
可到grunt官网copy：http://www.gruntjs.net/getting-started

3、在node.js command prompt输入命令进入到项目所在目录


4、继续执行 npm install将相关的文件下载下来


5、创建src文件夹（如上图），用于存放需要处理的文件

6、运行grunt命令，压缩文件





进阶
http://www.cnblogs.com/hubcarl/p/4095122.html
http://www.hdwill.info/post/2014/gruntjs-imagemin

配置gruntfile.js，添加imagemin/cssmin

输入命令：npm install grunt-contrib-imagemin --save-dev 安装
安装完成后再输入命令：grunt imagemin或grunt cssmin，进行压缩









参数说明：
1、grunt.initConfig方法
expand：如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
cwd：需要处理的文件所在的目录。
src：表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符。
dest：表示处理后的文件名或所在目录。
ext：表示处理后的文件后缀名。
2、grunt常用函数
grunt.initConfig：定义各种模块的参数，每一个成员项对应一个同名模块。
grunt.loadNpmTasks：加载完成任务所需的模块。
grunt.registerTask：定义具体的任务。第一个参数为任务名，第二个参数是一个数组， 表示该任务需要依次使用的模块。
3、grunt常用模块
grunt-contrib-clean：删除文件。
grunt-contrib-compass：使用compass编译sass文件。
grunt-contrib-concat：合并文件。
grunt-contrib-copy：复制文件。
grunt-contrib-cssmin：压缩以及合并CSS文件。
grunt-contrib-imagemin：图像压缩模块。
grunt-contrib-jshint：检查JavaScript语法。
grunt-contrib-uglify：压缩以及合并JavaScript文件。
grunt-contrib-watch：监视文件变动，做出相应动作。



























LESS CSS环境配置
1、在node.js => npm的环境下，输入命令
npm install -g less
npm install -g less-plugin-clean-css

2、Sublime text 安装
Ctrl+shift+p > install package > less2css安装

3、配置环境变量



4、重启sublime，随便打开一个xxx.less文件，ctrl+s保存，同时，在xxx.less同级目录下生成同名的xxx.css。
