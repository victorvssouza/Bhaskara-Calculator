var a;
var b;
var c;

prompt("Insira o valor de a = ", a);
prompt("Insira o valor de b = ", b);
prompt("Insira o valor de c = ", c);

var delta = b * b - 4 * a * c;
document.getElementById("delta").innerHTML = delta;

var x1 = (-b + delta/delta) / 2*a
document.getElementById("var_x1").innerHTML = x1;

var x2 = (-b - delta/delta) / 2*a
document.getElementById("var_x1").innerHTML = x2;

