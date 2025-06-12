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
    
    //Alterando o H2 
    document.getElementById("h2").innerHTML = `${nome} recebeu um aumento de salário`

    //Cria um paragrafo dentro do HTML
    let p1 = document.createElement("p");
    p1.id="par1"
    p1.textContent = `O salario anterior era de R$${sal.toFixed(2)}`
    document.body.appendChild(p1)//Insere o paragrafo dentro de algum conteudo no HTML (dentro do body é o mais comum)

    let p2 = document.createElement("p");
    p2.id="par2"
    p2.textContent = `Com o aumento de ${aumento}%, seu salario vai aumentar R$${reajust.toFixed(2)} no proximo mês`
    document.body.appendChild(p2)//Insere o paragrafo dentro de algum conteudo no HTML (dentro do body é o mais comum)


    let p3 = document.createElement("p");
    p3.id="par3";
    p3.textContent = `A partir do mês seguinte, ${nome} passa a receber R$${novSal.toFixed(2)}`
    document.body.appendChild(p3)//Insere o paragrafo dentro de algum conteudo no HTML (dentro do body é o mais comum)
}