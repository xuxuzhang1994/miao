
//任务
var gulp=require('gulp'),
    plugins = require('gulp-load-plugins')(),
    yargs = require('yargs'),//命令行工具，解析参数
    path = require('path'),
    babel = require('gulp-babel');

/*
* 常用方法
*
* gulp.task -- 定义任务
*
* gulp.src -- 需要找到执行任务文件夹
*
* gulp.dest -- 执行任务的文件去处
*
* gulp.watch -- 观察文件是否发生变化
*
* */


//定义任务

gulp.task("message",function () {
    return console.log("hello word")
})

//执行 gulp message

//定义拷贝文件
gulp.task("html",function () {
    gulp.src("src/**/*.html")
        // .pipe(plugins.htmlmin())
        .pipe(plugins.rename({ extname: '.wxml' }))
        .pipe(gulp.dest("dist/"))
})

//图片压缩
gulp.task("img2",function () {
    gulp.src("src/images/**/*")
        .pipe(plugins.imagemin())
        .pipe(gulp.dest("dist/images"))
})
gulp.task("img",function () {
	gulp.src("img/**/*")
		.pipe(plugins.imagemin())
		.pipe(gulp.dest("dist/img"))
})

//js解析压缩
gulp.task("js", function(){
    return gulp.src('src/**/*.js')
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        // .pipe(plugins.uglify())
        .pipe(gulp.dest('dist'))
})
//less解析css
gulp.task("less", () => {
    return gulp.src(['src/**/*.less'])
        .pipe(plugins.less())
        .pipe(plugins.rename({ extname: '.wxss' }))
        .pipe(gulp.dest('dist'))
})

//json解析压缩
gulp.task("json", () => {
    return gulp.src(['src/**/*.json'])
        // .pipe(plugins.jsonminify())
        .pipe(gulp.dest('dist'))
})

//json解析压缩
gulp.task("icon", () => {
	return gulp.src(['src/iconfont/*'])
	// .pipe(plugins.jsonminify())
		.pipe(gulp.dest('dist'))
})

//合并代码
// gulp.task("script", () => {
//     return gulp.src(['src/**/*.js'])
//         .pipe(plugins.concat("mian.js"))
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(plugins.uglify())
//         .pipe(gulp.dest('dist'))
// })

// 监听文件是否发生变化

gulp.task("watch", () => {
    gulp.watch('src/**/*.html',['html']);
    gulp.watch('src/images/**/*',['img']);
    gulp.watch('src/**/*.js',['js']);
    gulp.watch('src/**/*.less',['less']);
    gulp.watch('src/**/*.json',['json']);
})


//路径
let root="src"

let resolveToComponents=function (glob="") {
    return path.join(root, 'app/components', glob); // app/components/{glob}
}

//模版创建
gulp.task("component",()=>{

    let componentInfo = yargs.argv.component.split(':');
    let name = componentInfo[0];//获取要创建的文件名称
    let parentPath = (componentInfo.length > 1 && componentInfo[1]) || '';//获取父文件夹名称
    let fileName = name.replace(/([A-Z])/g, "-$1").toLowerCase();//文件夹名称转换成小写
    let destPath = path.join(resolveToComponents(), parentPath, fileName); //文件夹创建
    gulp.src('generator/component/*.**')
        .pipe(plugins.template({
            name:name,
            fileName: fileName,
            parentPath: parentPath
        }))
        .pipe(plugins.rename(function (path) {
            path.basename = path.basename.replace('temp', name)
        }))
        .pipe(gulp.dest(destPath))
})


//定义默认任务
gulp.task("default",["html","img","js","less","json"])