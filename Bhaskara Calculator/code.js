var a = document.getElementById("var_a");
var b = document.getElementById("var_b");
var c = document.getElementById("var_c");

let btnCalculate = document.querySelector("#btnCalc");

btnCalculate.addEventListener('click' , function() {
    var delta = b * b - 4 * a * c;
    delta = document.getElementById("delta").innerHTML;
});

/*var delta = b * b - 4 * a * c;
document.getElementById("delta").innerHTML = delta;

if (delta <= -1 )

var x1 = (-b + delta/delta) / 2*a
document.getElementById("var_x1").innerHTML = x1;

var x2 = (-b - delta/delta) / 2*a
document.getElementById("var_x1").innerHTML = x2;
*/
