const textnum = document.getElementById("textnum");
const cf = document.getElementById("cf");
const fc = document.getElementById("fc");
const result = document.getElementById("result");
let temp = Number(textnum.value);

function convert() {
    
    if (cf.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1)+ " °F";
    }
    else if (fc.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + " °C";
    }
    else {
        result.textContent = "Please select conversion option";
    }
}
