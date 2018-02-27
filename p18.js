/**
 * Created by dingding on 2018/2/27.
 */
var a = 1, b = 2, c = 3;
var s = '';
(function firstFunction(){
    var b = 5, c = 6;
    (function secondFunction(){
        var b = 8;
        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;
                s+="a: "+a;
            })();
        })();
        s+=", b: "+b;
    })();
    s+=", c: "+c;
})();
console.log(s);