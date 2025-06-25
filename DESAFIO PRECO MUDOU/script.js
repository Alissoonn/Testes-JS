function veri(){
    let PreAnt = window.parseFloat(prompt("Qual era o preço anterior do produto?"))
    //Valida se ambos os prompts receberam o valor corretos
    if(isNaN(PreAnt)){
        alert("Digite um valor válido");
        return;
    }

    let PreAtu = window.parseFloat(prompt("Qual o preço atual do produto? "))
    //Valida se ambos os prompts receberam o valor corretos
    if(isNaN(PreAtu)){
        alert("Digite um valor válido");
        return;
    }

    //Remove os paragrafos que ficaram e iniciam os novos 
    let f1Antigo = document.getElementById("F1");
    if (f1Antigo) f1Antigo.remove();
    let f2Antigo = document.getElementById("F2");
    if (f2Antigo) f2Antigo.remove();
    let f3Antigo = document.getElementById("F3");
    if (f3Antigo) f3Antigo.remove();
    let f4Antigo = document.getElementById("F4");
    if (f4Antigo) f4Antigo.remove();
    

    //Altera o conteudo do H2 quando os prompts são preenchidos
    let Frase = document.getElementById("txt");
    Frase.innerHTML = "Analisando os valores informados"


    let frase1 = document.createElement("p");//Cria um paragrafo no HTML
    frase1.id="F1";//Cria um ID para o paragrafo editavel no CSS
    document.body.appendChild(frase1);//Anexa o paragrafo criado ao body
    frase1.innerHTML = `O produto custava R$${PreAnt.toFixed(2)} e agora custa R$${PreAtu.toFixed(2)}`//Colocando conteudo no paragrafo através do innerHTML


    let frase2 = document.createElement("p");
    frase2.id="F2"
    document.body.appendChild(frase2);
    //Faz a validação do maior e menor preço
    if(PreAnt < PreAtu){
        frase2.innerHTML = "Hoje o produto esta mais caro."
    }else if(PreAnt == PreAtu){
        frase2.innerHTML = "O preço se mantém igual"
    }else{
        frase2.innerHTML = "Hoje o produto ficou mais barato"
    }


    let frase3 = document.createElement("p");
    frase3.id = "F3";
    document.body.appendChild(frase3);
    //Faz a validação,calcula e mostra a diferença entre eles
    let difer = PreAtu - PreAnt;
    if(PreAnt < PreAtu){
        frase3.innerHTML = `O preço do produto aumentou em R$${difer.toFixed(2)} em relação ao preço anterior.`
    }else if(PreAnt == PreAtu){
        frase3.innerHTML = "Os preços não mudaram."
    }else{
        frase3.innerHTML = `O preço do produto caiu em R$${difer.toFixed(2)} em relação ao preço anterior.`
    }

    let frase4 = document.createElement("p");
    frase4.id = "F4";
    document.body.appendChild(frase4);

    //Aqui pego o preço atual e subtraio pelo preço antigo
    //O valor é dividido pelo preço antigo para chegar na proporção da mudança
    //Em seguida faço a proporçõa vezes 100 para ter a porcentagem
    let porcent = ((PreAtu - PreAnt) / PreAnt) * 100;
    if(PreAnt < PreAtu){
        frase4.innerHTML = `Ocorreu uma variação de ${porcent.toFixed(2)}% para cima`        
    }else if(PreAnt == PreAtu){
        frase4.innerHTML = "Não houve variação no preço do produto"
    }else{
        frase4.innerHTML = `Ocorreu uma variação de ${porcent.toFixed(2)}% para baixo`
    }
    
}

