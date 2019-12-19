function trueorfalse(maheshistrue){
    if(maheshistrue){
        return "yes he is true";
    }
    return "no he is wrong";
}
undefined
console.log(trueorfalse(true));
VM2642:1 yes he is true
undefined
function compareequality(a,b){
    if(a==b){
        return "equal";
    }
    return "not equal";
}
undefined
console.log(compareequality(10,"10"));
VM2943:1 equal
undefined
function compareequality(a,b){
    if(a===b){
        return "equal";
    }
    return "not equal";
}
undefined
console.log(compareequality(10,"10"));
VM2963:1 not equal
undefined
