function cp(){
    //variavel pro recebe o valor em string do primeiro prompt
    let pro = window.prompt("Qual o produto a ser comprado?")
    //Variavel pre recebe só recebe numeros inteiros no prompt
    let pre = window.Number(parseFloat(prompt("Qual o valor do item?")))
    //Variavel din recebe valores quebrados do prompt
    let din = window.Number(parseFloat(prompt("Quanto a pagar a vista?")))

    //Calculo feito dentro da propria função, ambos valores em float fazem a subtração
    window.alert(`Produto comprado: ${pro} no valor de R$ ${pre} . Pagou a vista com ${din} recebendo o seguinte troco: ${din - pre}`)
}