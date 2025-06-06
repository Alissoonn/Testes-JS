function temp(){
  //cel recebe o valor do primeiro prompt
  let cel = window.Number(parseFloat(prompt("Digite a temperatura em °C (Celsius)")))
  //Variavel res substitui o txt do <h2> 
  let res = document.getElementById('txt')

  if(isNaN(cel)){//SE cel NÂO FOR UM NUMERO,executa o Inner abaixo
    res.innerHTML = "Por favor digite um número valido"
    return;//return garante que a validação ocorra novamente
  }

let kel = cel + 273.15;/*Formula para graus Kelvin*/
let far = (cel * 9/5) + 32;/*Formula para graus fahren*/

//o res la em cima agora altera todo o <h2>, o toFixed(2) serve para trazer 2 casas após a virgula somente
res.innerHTML = (`A temperatura de ${cel} corresponde a...<br> ${kel.toFixed(2)}°K (Kelvin) e ${far.toFixed(2)}°F (Fahrenheit)`)
}

//OBS* isNan significa "Is not a number"