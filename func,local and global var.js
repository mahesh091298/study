function ourreusablefunction(){
    console.log("hello world");
}
undefined
ourreusablefunction();
VM1724:2 hello world
undefined
ourreusablefunction();
VM1724:2 hello world
undefined
function add(a,b){
    console.log(a+b);
}
undefined
add(18,9);
VM1908:2 27
undefined
var outerwear="tshirts";
undefined
function myoutfit(){
    var outerwear="sweater";
    return outerwear;
}
undefined
console.log(myoutfit());
VM2224:1 sweater
undefined
console.log(outerwear);
VM2301:1 tshirts
undefined
