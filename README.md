# learnJavaScript
commonJS
    同步加载,主要用于服务器端
    (NodeJS和webpack)
    模块引用：使用 require 方法来引入一个模块
    模块定义：使用 exports 导出模块对象


    AMD:异步模块加载机制
    在加载模块以及模块所依赖的其它模块时，都采用异步加载的方式，避免模块加载阻塞了网页的渲染进度
    define([module-name?], [array-of-dependencies?], [module-factory-or-object]);
    define函数具有异步性。
    当define函数执行时，首先会异步的去调用第二个参数中列出的依赖模块，当所有的模块被载入完成之后，如果第三个参数是一个回调函数则执行；然后告诉系统模块可用，也就通知了依赖于自己的模块自己已经可用
    常见requireJs
    // main.js
    require(['moduleA'], function(a){
    　　console.log(a);
    });
    //moduleA.js
    define(function(){
    return 1;
    })
    define()定义的模块可以被调用，而require()不可以

    CMD:
    对模块进行预加载
    seaJs

    AMD与CMD主要有以下两点区别

        　　1、所依赖模块的执行时机

        　　对于依赖的模块，AMD是提前执行，CMD是延迟执行

        　　AMD在加载模块完成后就会执行该模块，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执行。不过，新版本的RequireJS也可以延迟执行

        　　CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的。如果使用require.async()方法，可以实现模块的懒加载，即不执行不下载

            2、CMD推崇依赖就近，AMD推崇依赖前置

            // CMD
            define(function(require, exports, module) {
            var a = require('./a')
            a.doSomething()
            // 此处略去 100 行
            var b = require('./b') // 依赖可以就近书写
            b.doSomething()
            // ...
            })

            // AMD
            define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好
            a.doSomething()
            // 此处略去 100 行
            b.doSomething()
            ...
            })

            模块化demo见书签

            get请求和post请求
            见https://www.cnblogs.com/lanyueff/p/7771236.html