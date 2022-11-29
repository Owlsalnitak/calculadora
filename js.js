var primeiroValor = parseInt(prompt("Digite o primeiro valor"))
var segundoValor = parseInt(prompt("Digite o segundo valor"))

var operacao = prompt("1- divisão, 2-multiplicação, 3-soma, 4- subtração")

if(operacao == 1){
  var res =  primeiroValor / segundoValor;
  document.write("<h2>"+ primeiroValor+ " / " + segundoValor + " = "+ res+ "</h2>")
}
if(operacao == 2){
    var res =  primeiroValor * segundoValor;
    document.write("<h2>"+ primeiroValor+ " * " + segundoValor + " = "+ res+ "</h2>")
  }
  if(operacao == 3){
    var res =  primeiroValor + segundoValor;
    document.write("<h2>"+ primeiroValor+ " + " + segundoValor + " = "+ res+ "</h2>")
  }
  if(operacao == 4){
    var res =  primeiroValor - segundoValor;
    document.write("<h2>"+ primeiroValor+ " - " + segundoValor + " = "+ res+ "</h2>")
  }
 