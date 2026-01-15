const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const operation = document.getElementById("operation");
const result= document.getElementById("result");
let answer;

function gererate(){
    let n1=Number(num1.value);
    let n2=Number(num2.value);
    let op = operation.value;

    if (isNaN(n1) || isNaN(n2)){
        alert("enter a valid number");
        return;
    }
    else if (op==="add"){
        answer= n1 + n2 ;
    }
    else if (op ==="sub"){
        answer=n1-n2;
    }
    else if (op=="mul"){
        answer= n1 *n2;

    }
    else if (op=="div"){
        if(n2==0){
            alert("enter a valid number");
            return;
        }
        answer = n1 /n2;
    }
    result.textContent = "RESULT :   "+ answer;

}
