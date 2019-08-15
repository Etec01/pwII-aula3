let message: string = "OI Eu sou Goku e minha media é "
console.log(message)
var n1 = 9;
var n2 = 5;
//var n3 = 3;
// var res = (n1 + n2 + n3)/3;
//let fmedia = function(nota1:number,nota2:number,nota3:number ):number{
//    return(nota1 + nota2 + nota3)/3}
//var fmedia = (nota1:number, nota2:number, nota3:number) => (nota1 + nota2 + nota3) / 3;

var fmedia = (nota1:number, nota2:number, nota3:number = 5) => (nota1 + nota2 + nota3) / 3;
console.log (`Oi eu sou GOku e minha media é : ${fmedia(n1,n2)}`);


