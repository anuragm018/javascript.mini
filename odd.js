const result = document.getElementById("result");
const num = document.getElementById("num");

function oddor() {
 let n1 = Number(num.value);

  if (n1 % 2 == 0) {
    result.textContent=`${n1}    IS A ODD `;
  }else{
    result.textContent=` ${n1}    IS NOT ODD `;
    return;
  }
}
