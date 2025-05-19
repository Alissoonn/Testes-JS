function cp(){
    let pro = window.prompt("Qual o produto a ser comprado?")
    let pre = window.Number(parseInt(prompt("Qual o valor do item?")))
    let din = window.Number(parseInt(prompt("Quanto a pagar a vista?")))
    window.alert(`Produto comprado: ${pro} no valor de R$ ${pre} . Pagou a vista com ${din} recebendo o seguinte troco: ${din - pre}`)
}