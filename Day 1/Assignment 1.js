function Add(num1, num2, ... rp){
    if(arguments.length < 2){
        return 0;
    }
    let res = num1 + num2;
    if(arguments.length > 2){
        let sum = 0;
        rp.forEach((i)=> {sum +=i })
        res = res - sum;
    }
    if(Number.isNaN(res)){
        return -1;
    }
    return Math.abs(res);
}
let a = Add(10,10,1000);
console.log(a);
var x;
let b=Add(1,x);
console.log(b);