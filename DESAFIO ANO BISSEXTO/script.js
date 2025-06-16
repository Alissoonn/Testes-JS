function veri(){
    let ano = window.parseInt(prompt("Qual o ano que você quer verificar?"));

    //Faz a validação antes dos calculos *IMPORTANTE
    if(isNaN(ano)){
        alert("Por favor digite um ano válido");
        return;
    }

    //Mudando o conteudo do H2 para o digitado
    let par = document.getElementById("txt");
    par.innerHTML = `Analisando o ano de ${ano}...`

    // Remove o parágrafo anterior, se existir
    let anterior = document.getElementById("bis");
    if (anterior) {
        anterior.remove();
    }

    //Cria um paragrafo dentro do HTML
    let p1 = document.createElement("p");
    p1.id = "bis";//Cria um ID para edição no CSS
    document.body.appendChild(p1)//Anexa o elemento criado ao corpo do HTML
    
   if (ano % 400 == 0) {//SE FOR divisivel por 400
        p1.textContent = `O ano de ${ano} é bissexto!`;
    } else if (ano % 100 == 0) {//SE FOR divisivel por 100 NÂO é
        p1.textContent = `O ano de ${ano} NÃO é bissexto!`;
    } else if (ano % 4 == 0) {//SE FOR divisivel por 4 
        p1.textContent = `O ano de ${ano} é bissexto!`;
    } else {
        p1.textContent = `O ano de ${ano} NÃO é bissexto!`;
    }
    
}
