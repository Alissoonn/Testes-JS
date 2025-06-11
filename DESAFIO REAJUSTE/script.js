function re(){
    let nome = prompt("Qual o nome do funcionario?");
    let sal = parseFloat(prompt(`Qual o salario de ${nome} ?`))
    let aumento = parseInt(prompt(`O salario de ${nome} será ajustado para qual porcentagem?`))
    //Verifica se esta vazio ou somente com espaços
        if(!nome || nome.trim() === ""){
            alert("Por favor digite um nome valido")
            return;
        }

    //Regex:permite letras(maiúsculas e minúsculas),acentos e espaços
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    //test serve para testar se é uma expressão regular(padrão)
    if(!regex.test(nome.trim())){
        alert("O nome deve conter apenas letras e espaços");
        return;
    }

    //Pega o salario atual e multiplica pelo aumento, depois divide em 100%
    let reajust = (sal*aumento) / 100;
    let novSal = sal+reajust;

    //Alterando o paragrafo 
    document.getElementById("txt").innerHTML = `O salário atual era de R$${sal.toFixed(2)}`
}