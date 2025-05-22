function temp(){
  let cel = window.Number(parseFloat(prompt("Digite a temperatura em °C (Celsius)")))
  let res = document.getElementById('txt')

  if(isNaN(cel)){//SE cel NÂO FOR UM NUMERO,executa o Inner abaixo
    res.innerHTML = "Por favor digite um número valido"
    return;
  }

let kel = cel + 273.15;/*Formula para graus Kelvin*/
let far = (cel * 9/5) + 32;/*Formula para graus fahren*/
  
res.innerHTML = (`A temperatura de ${cel} corresponde a...<br> ${kel.toFixed(2)}°K (Kelvin) e ${far.toFixed(2)}°F (Fahrenheit)`)
}


//OBS* isNan significa "Is not a number"