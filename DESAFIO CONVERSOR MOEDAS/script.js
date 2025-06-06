function cot(){
    //O conteudo do ID "titulo" vai mudar por conta do innerText
    document.getElementById("titulo").innerText="Clique no botão abaixo para converter";

    //O ID "entrada" que vem setada para aparecer vai sumir
    document.getElementById("entrada").style.display = "none";

    //O ID "newbot" foi setado para sumir, ira aparecer
    document.getElementById("newbot").style.display = "block";
}

function conv(){
    //Variavel CotacaoDolar recebeu o que foi digitado dentro do primeiro botão
    let CotacaoDolar = parseFloat(document.getElementById("val").value);

    //SEMPRE USAR ESSE VALIDADOR DE VALORES
if(isNaN(CotacaoDolar) || CotacaoDolar <= 0){
    alert("Por favor insira um valor valido");
    return;
}//SE CotacaoDolar não for um numero OU menor ou igual a zero

//Recebe o prompt de quantos reais serão convertidos para dolar
    let ValoremReais = parseFloat(prompt("Quanto você tem na carteira?"));

if(isNaN(ValoremReais) || ValoremReais <= 0 ){
    alert("Por favor insira um valor");
    return;
}

//Pega o valor do quando voce tem e converte por quanto esta valendo 
    let ValorDolar = ValoremReais / CotacaoDolar
    window.alert(`Com R$${ValoremReais.toFixed(2)} é possivel adquirir ${ValorDolar.toFixed(2)} dolares `);
}

