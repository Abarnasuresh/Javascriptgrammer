/*function a(){
    var x=5;
    function b(){
        console.log(x);
    }
    return b;
}
var c=a();
c();*/

function a(){
    function b(){
        console.log(b);
    }
    b();
}
a();
