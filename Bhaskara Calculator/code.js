var a = 0;
var b = 0;
var c = 0;

prompt("Insira o valor de a = ", a);
prompt("Insira o valor de b = ", b);
prompt("Insira o valor de c = ", c);

// if (a = 0){
//     alert("Variable a does not receive value 0")
// }

var delta = b * b - 4 * a * c;
document.getElementById("delta").innerHTML = delta;

if (delta <= -1 )

var x1 = (-b + delta/delta) / 2*a
document.getElementById("var_x1").innerHTML = x1;

var x2 = (-b - delta/delta) / 2*a
document.getElementById("var_x1").innerHTML = x2;

