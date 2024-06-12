// Números del 1 al 2000 que empiezan por 2:
let num = 2000;
for(let count = 1; count <= num; count++) {
    let numToString = count.toString();

    if(numToString.startsWith(2)){
        console.log(num);
    }
}

console.log(typeof numToString)