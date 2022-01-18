//anatomy function
function cricketAcc(bat,helmet)
{
return bat+helmet
}
let k=cricketAcc("honda bat ","suprme helmet");
console.log(k)

//Anonymous function
setTimeout(function () {
    console.log("Welcome to javascript");
}, 100);
//Assigning function to variable
let s=function(a,b){
    return a*b;
  }
  console.log(s(4,5));
