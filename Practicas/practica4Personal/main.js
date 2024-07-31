// // var multiplo = Number(prompt("Digite un número del que desea conocer sus multiplos hasta el 15."));
// // for (var number = 1; number <= 15; number++) {
// //     const tableResult = number * multiplo;
// //     document.write(multiplo , " x ", number , " es igual a: ", tableResult , "<br>");
// // }
// // document.write("<br>","Y esa fue la tabla del " ,multiplo,", fin del programa.");

// // let n1 = Number(prompt("Digite un número:"));
// // let n2 = Number(prompt("Digite otro número:"));
// // let n3 = Number(prompt("Digite otroo número:"));

// const suma = n1 + n2 + n3;
// const producto = n1 * n2 * n3;

// document.write("la suma de los 3 numeros es de: ",suma)
// document.write("<br>")

// if(n1 % 2 === 0) {
//     document.write("<br>",n1," Es par");
// }else if(n2 % 2 === 0) {
//     document.write("<br>",n2," Es Par");
// }else if(n3 % 2 === 0) {
//     document.write("<br>",n3," Es par");
// }else{
//     document.write("No hay numeros pares");
// }
// document.write("<br>")
// document.write("<br>","El producto de los 3 numeros es de: ",producto);


let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50]
