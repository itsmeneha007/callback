let n1 = 10;
let n2 = 20;


function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function calculate(num1, num2){

    function operation(num1, num2, callback){
        return callback(num1,num2);
    }

    console.log(operation(num1, num2, add))
    console.log(operation(num1, num2, mul))
}

calculate(n1, n2);